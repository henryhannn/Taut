# == Schema Information
#
# Table name: memberships
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_memberships_on_user_id_and_channel_id  (user_id,channel_id) UNIQUE
#
class Membership < ApplicationRecord
  validates :user_id, :channel_id, presence: true

  belongs_to :user
  belongs_to :channel
end
