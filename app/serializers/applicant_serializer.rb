class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bio
  has_many :offers
  has_many :skills
  has_many :applications
end
