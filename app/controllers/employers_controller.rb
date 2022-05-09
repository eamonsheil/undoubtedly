class EmployersController < ApplicationController
    
    
    def index
        render json: Employer.all
    end

end
