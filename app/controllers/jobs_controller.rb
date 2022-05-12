class JobsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: Job.all
    end

    def user_jobs
        
        s = @current_user.skills[0].truthy_keys
        jobs = Job.all.select {|j| s.include?(j.required_skills)}
       
        render json: jobs
    end

    def create
        job = Job.create(params.permit(:title, :description, :employment_type, :salary, :required_skills, :remote, :employer_id))
        render json: job, status: :created
        
    end


end
