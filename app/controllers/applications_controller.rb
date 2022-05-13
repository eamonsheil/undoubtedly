class ApplicationsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
      render json: Application.all
    end

    def show
      app = Application.where(job_id: params[:id])
      if app
        render json: app
      else
        render json: { error: "Application not found" }, status: :not_found
      end
    end

    def create
        application = Application.create(params.permit(:applicant_id, :job_id))
        render json: application, status: :created

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
      

end
