import request from '../utils/request';
import { dataHost } from '../common/config.js';


//获取管理员信息
export function adminData(){
	return request(dataHost+`/adminInfo`)
}
//获取搜索结果
export function search(params){
	var resHost = ``;
	if(!params.searchValue){
		resHost = dataHost+`/adminInfo`;
	}else if(params.searchType=="用户名"){
		resHost = dataHost+`/adminInfo?username=${params.searchValue}`;
	}else if(params.searchType=="手机号"){
		resHost = dataHost+`/adminInfo?phone=${params.searchValue}`;
	}else if(params.searchType=="邮箱"){
		resHost = dataHost+`/adminInfo?email=${params.searchValue}`;
	}
	return request(resHost);
}