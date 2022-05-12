class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    if Applicant.find_by(id: session[:user_id])
      user = Applicant.find_by(id: session[:user_id])
    else
      user = Employer.find_by(id: session[:user_id])
    end

    # applicant = Applicant.find_by(id: session[:user_id])
    # employer = Employer.find_by(id: session[:user_id])
    # if applicant
    #   @current_user = applicant
    # else
    #   @current_user = employer
    # end
    @current_user = user
  
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end