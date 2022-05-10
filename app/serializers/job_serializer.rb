class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :salary, :employment_type, :required_skills, :remote, :title
  belongs_to :employer
end
