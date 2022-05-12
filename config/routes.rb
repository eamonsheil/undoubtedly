Rails.application.routes.draw do
  resources :jobs, only: [:index, :show]
  resources :employers, only: [:index, :show]
  resources :applicants, only: [:index, :show, :create]
  resources :skills, only: [:index]

  post "/signup", to: "applicants#create"

  post "/signup_applicant", to: "applicants#create"
  post "/signup_employer", to: "employers#create"
  
  get "/me", to: "auto_logins#show"
  
  post "/applicant_login", to: "sessions#create_applicant"
  post "/employer_login", to: "sessions#create_employer"
  
  delete "/logout", to: "sessions#destroy"

  get "/job_matches", to: "jobs#user_jobs"

  post "/add_skills", to: "skills#create"

  post "/new_job", to: "jobs#create"

  post "/apply",to: "applications#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
