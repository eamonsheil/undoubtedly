class SkillsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        render json: Skill.all
    end

    def create
        skill = Skill.create(params.permit(:javascript, :ruby, :react, :rails, :frontend, :backend, :applicant_id))
        render json: skill, status: :created
    end
end
