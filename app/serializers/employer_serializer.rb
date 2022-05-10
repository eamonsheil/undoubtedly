class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio
  has_many :jobs
  has_many :offers
end
