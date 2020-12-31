# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_type :string           not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  owner_id     :integer
#
# Indexes
#
#  index_channels_on_name  (name)
#
class Channel < ApplicationRecord
    validates :name, :channel_type, presence: true

    has_many :messages,
        foreign_key: :channel_id,
        class_name: :Message

    has_many :memberships,
        foreign_key: :channel_id,
        class_name: :Membership

    has_many :users,
        through: :subscriptions

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end
