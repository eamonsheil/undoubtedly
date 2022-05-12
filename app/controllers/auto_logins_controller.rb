class AutoLoginsController < ApplicationController


    def show
        if Applicant.find_by(id: session[:user_id])
              user = Applicant.find_by(id: session[:user_id])
              if user
                render json: user
              else
                render json: { message: "No user logged in" }, status: :unauthorized
              end
        else
              user = Employer.find_by(id: session[:user_id])
              if user
                render json: user
              else
                render json: { message: "No user logged in" }, status: :unauthorized
              end
            end
        end
    end
