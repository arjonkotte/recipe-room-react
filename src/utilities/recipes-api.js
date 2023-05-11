import sendRequest from './send-request';
const BASE_URL = '/api/recipes';


export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function getOne(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function add(content) {
  return sendRequest(`${BASE_URL}`, 'POST', content);
}