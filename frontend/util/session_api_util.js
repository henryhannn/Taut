export const signin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);
  
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);
  
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const getALLUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const getCurrentUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);