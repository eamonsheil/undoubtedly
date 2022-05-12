Rails.application.routes.draw do
  resources :jobs, only: [:index, :show]
  resources :employers, only: [:index, :show]
  resources :applicants, only: [:index, :show, :create]
  resources :skills, only: [:index]
  resources :applications

  post "/signup", to: "applicants#create"
  get "/me", to: "applicants#show"
  post "/applicant_login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/job_matches", to: "jobs#user_jobs"

  post "/add_skills", to: "skills#create"

  post "/apply",to: "applications#create"
  delete "/withdraw/:id", to: "applications#destroy"

  get "/job_applications", to: "applicants#job_applications"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
