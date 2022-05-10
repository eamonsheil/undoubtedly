class Employer < ApplicationRecord
    has_many :jobs, dependent: :delete_all
    has_many :offers, dependent: :delete_all
    has_many :applicants, through: :offers

    has_secure_password
end