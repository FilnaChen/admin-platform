import request from '../utils/request';
import { dataHost } from '../common/config.js';

export function loginCheck(params) {
	let username = params.username;
	let password = params.password;
  return request(dataHost+`/loginInfo?username=${username}&password=${password}`);
}
export function getMenu() {
  return request(dataHost+`/menus`);
}
