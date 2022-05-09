puts "destroying seeds..."
Applicant.destroy_all
Employer.destroy_all
puts "done destroying"

puts "seeding applicants...."

5.times do
    Applicant.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    bio: Faker::Quote
)

    Skill.create(
        javascript: Faker::Boolean.boolean,
        ruby: Faker::Boolean.boolean,
        react: Faker::Boolean.boolean,
        rails: Faker::Boolean.boolean,
        frontend: Faker::Boolean.boolean,
        backend: Faker::Boolean.boolean,
        applicant_id: Applicant.all.sample

    )
end
puts "done seeding applicants!"

puts "seeding employers...."

10.times do
    Employer.create(
        name: Faker::Company.name,
        email: Faker::Internet.email,
        password: "password",
        bio: Faker::Company.catch_phrase
    )

    rand(3..5).times do
        Job.create(
            description: Faker::Company.bs,
            salary: rand(1000..100000),
            employment_type: Faker::Job.employment_type,
            required_skills: Faker::ProgrammingLanguage.name,
            remote: Faker::Boolean.boolean,
            employer: Employer.all.sample
        )
    end
end

puts "seeding complete!"
