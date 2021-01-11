export const baseUrl='http://localhost:5000/';
export const headers = {
    'Content-Type' : 'application/json',
  'Accept' : 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('token')
  }
  