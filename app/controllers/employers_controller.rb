class EmployersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    
    def index
        render json: Employer.all
    end

end
