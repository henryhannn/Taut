Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end