class RealApplicationSerializer < ApplicationSerializer
  attributes :id, :applicant_id
  belongs_to :job
  belongs_to :applicant
end
