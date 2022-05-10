puts "destroying seeds..."
    Applicant.destroy_all
    Employer.destroy_all
puts "seeds destroyed"

puts "seeding applicants...."

5.times do
    a = Applicant.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password",
    bio: Faker::Quotes::Chiquito.expression
)

    Skill.create(
        javascript: Faker::Boolean.boolean,
        ruby: Faker::Boolean.boolean,
        react: Faker::Boolean.boolean,
        rails: Faker::Boolean.boolean,
        frontend: Faker::Boolean.boolean,
        backend: Faker::Boolean.boolean,
        applicant_id: a.id
    )
end

puts "done seeding applicants!"

puts "seeding employers...."

skillsSelect = [
    "javascript",
    "ruby",
    "react",
    "rails",
    "frontend",
    "backend"
 ]

10.times do
    e = Employer.create(
        name: Faker::Company.name,
        email: Faker::Internet.email,
        password: "password",
        bio: Faker::Company.catch_phrase
    )

    rand(3..5).times do
        Job.create(
            description: Faker::Company.bs,
            salary: rand(60000..200000),
            employment_type: Faker::Job.employment_type,
            required_skills: skillsSelect[rand(0..5)],
            remote: Faker::Boolean.boolean,
            employer_id: e.id,
            title: Faker::Job.title
        )
    end
end

puts "seeding complete!"
