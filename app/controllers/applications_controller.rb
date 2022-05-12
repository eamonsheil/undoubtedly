class ApplicationsController < ApplicationController
    skip_before_action :authorize, only: [:create]

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
