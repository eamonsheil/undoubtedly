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

      if params[:id]
        user = Applicant.find(params[:id])
        render json: user
      end
      
      user = Applicant.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { message: "No user logged in" }, status: :unauthorized
      end
    end
  
  private
  
  def user_params
    params.permit(:password, :password_confirmation, :name, :bio, :email)
  end
  


end
