class ApplicationsController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :show]

  def index
    render json: Application.all, each_serializer: RealApplicationSerializer
  end

  def show
    app = Application.where(job_id: params[:id])
    if app
      render json: app, each_serializer: RealApplicationSerializer
    else
      render json: { error: "Application not found" }, status: :not_found
    end
  end

  def create
      application = Application.create(params.permit(:applicant_id, :job_id))
      render json: application, status: :created, serializer: RealApplicationSerializer

  end

  def destroy
      application = Application.find_by(id: params[:id])
      if application
          application.destroy
          render json: application
      else
        render json: { error: "Application not found" }, status: :not_found
      end
  end

  def job_applications
    user = Applicant.find_by(id: session[:user_id])
    if user
      applications = user.applications
      render json: applications, include: :job, each_serializer: RealApplicationSerializer
    else
      render json: { message: "No user logged in" }, status: :unauthorized
    end
  end
    

end
