class Applicant < ApplicationRecord
    has_many :offers, dependent: :delete_all
    has_many :skills, dependent: :destroy
    has_many :applications, dependent: :delete_all
    has_many :jobs, through: :applications

    has_secure_password



end
