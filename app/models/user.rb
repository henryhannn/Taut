# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_full_name      (full_name)
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    
    attr_reader :password

    validates :full_name, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :messages
    has_many :channels, through: :memberships

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.check_password?(password) ? user : nil
      end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        create_unique_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
        create_unique_session_token unless self.session_token
    end
    
    def create_unique_session_token
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by(session_token: self.session_token)
          self.session_token = SecureRandom.urlsafe_base64
        end
        self.session_token
    end
end
