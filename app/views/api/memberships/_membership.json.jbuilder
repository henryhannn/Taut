json.set! member.id do
  json.extract! member, :id, :user_id, :channel_id
end