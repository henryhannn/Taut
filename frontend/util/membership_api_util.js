export const fetchMemberships = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/memberships',
    data: { channel_id }
  })
);

export const createMembership = (membership) => (
  $.ajax({
    method: 'POST',
    url: '/api/memberships',
    data: { membership }
  })
);