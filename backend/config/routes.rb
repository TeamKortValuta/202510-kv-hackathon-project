Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  scope module: :api, defaults: { format: :json } do
    resources :events, only: [ :index, :show ] do
      post :reserve, on: :member
    end

    post "admin/events", to: "admin#create_event"
    post "admin/verify_event_code", to: "admin#verify_event_code"
  end
end
