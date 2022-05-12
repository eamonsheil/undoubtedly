class EmployersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    
    def index
        render json: Employer.all
    end

    def show
        user = Employer.find(params[:id])
        render json: user
    end

    def create
        user = Employer.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    private
    
    def user_params
      params.permit(:password, :password_confirmation, :name, :bio, :email)
    end
end
