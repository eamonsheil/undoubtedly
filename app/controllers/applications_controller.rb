class ApplicationsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        application = Application.create(params.permit(:applicant_id, :job_id))
        render json: application, status: :created

    end
end
