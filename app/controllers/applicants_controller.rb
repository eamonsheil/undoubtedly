class ApplicantsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: Applicant.all
    end

    def create
        user = Applicant.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
      user = Applicant.find(params[:id])
      render json: user
    end
    
    private
    
    def user_params
      params.permit(:password, :password_confirmation, :name, :bio, :email)
    end
    


end
