# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_type :string           not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_channels_on_name  (name)
#
class Channel < ApplicationRecord
    validates :name, :channel_type, presence: true
end
