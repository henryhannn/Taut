Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]

    resources :channels, only: [:index, :show, :create, :destroy]
    resources :channels do
      resources :messages, only: [:index]
      resources :memberships, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :messages, only: [:create, :destroy]

    resources :memberships, only: [:create]
  end

  root "static_pages#root"
  mount ActionCable.server => '/cable'
end