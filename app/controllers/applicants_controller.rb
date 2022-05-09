class ApplicantsController < ApplicationController

    def index
        render json: Applicant.all
    end


end
