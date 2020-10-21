export const fetchMemberships = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channel_id}/memberships`
  })
);

export const createMembership = (membership) => (
  $.ajax({
    method: 'POST',
    url: '/api/memberships/',
    data: {membership}
  })
);