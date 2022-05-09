class Application < ApplicationRecord
    belongs_to :applicant
    belongs_to :jobs
end
