class OfferSerializer < ApplicationSerializer
  attributes :id, :salary, :message, :job_title, :applicant_id
  belongs_to :employer
  belongs_to :applicant
end
