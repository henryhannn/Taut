export const fetchMessages = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/messages',
    data: { channel_id }
  })
);

export const createMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  })
);