class JobApplicationsSerializer < ActiveModel::Serializer
  attributes :id, :job
  belongs_to :job
  belongs_to :applicant
end
