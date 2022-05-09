class Applicant < ApplicationRecord
    has_many :offers, dependent: :destroy
    has_many :skills, dependent: :destroy
    has_many :applications, dependent: :destroy
    has_many :jobs, through: :applications

    has_secure_password
end
