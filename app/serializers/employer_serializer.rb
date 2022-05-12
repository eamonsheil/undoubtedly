class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio, :is_employer
  has_many :jobs
  has_many :offers
  
end
