import request from '../utils/request';
import { dataHost } from '../common/config.js';


//修改用户密码
export function changePwd(params){
	return request(dataHost+`/loginInfo?newPwd=${params.newPwd}&oldPwd=${params.oldPwd}`);
}
