class Employer < ApplicationRecord
    has_many :jobs, dependent: :destroy
    has_many :offers, dependent: :destroy
    has_many :applicants, through: :offers

    has_secure_password
end