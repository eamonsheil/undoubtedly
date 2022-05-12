class ApplicationsSerializer < ActiveModel::Serializer
  attributes :id :applicant_id, :job_id
  belongs_to :job
  belongs_to :applicant
end
