class OffersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]

    def index
        render json: Offer.all
    end
    
    def create
        offer = Offer.create(params.permit(:employer_id, :applicant_id, :salary, :message, :job_title))        
        render json: offer, status: :created
    end

    def show
        offers = Offer.where(applicant_id: params[:id])
        render json: offers
    end

    def destroy
        offer = Offer.find_by(id: params[:id])
        offer.destroy
        head :no_content
    end
end
