class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create_applicant, :create_employer]

  def create_applicant
    user = Applicant.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def create_employer
    user = Employer.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end


  def destroy
    session.delete :user_id
    head :no_content
  end

end
