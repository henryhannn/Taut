Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:index, :show, :create]
    resources :channels, only: [:index, :show, :create] do
      resources :messages, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:create, :destroy]
  end

  root "static_pages#root"
  mount ActionCable.server => '/cable'
end