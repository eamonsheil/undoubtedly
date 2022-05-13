class OffersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: Offer.all
    end
    def create
        offer = Offer.create(params.permit(:employer_id, :applicant_id, :salary, :message, :job_title))        
        render json: offer, status: :created
    end
end
