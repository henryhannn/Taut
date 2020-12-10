# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#
# Indexes
#
#  index_messages_on_author_id   (author_id)
#  index_messages_on_channel_id  (channel_id)
#
class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
