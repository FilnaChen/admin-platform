import { routerRedux } from 'dva/router';
import { loginCheck, getMenu } from '../services/login.js';
import { host } from '../common/config.js';
export default {

  namespace: 'login',

  state: {
    loginStatus: false,
    menus: []
  },

  subscriptions: {
    
  },

  effects: {
    *fetchCheckData({payload},{call,put}){
      let response = yield call(loginCheck,payload);
      if(response.data[0].username && response.data[0].password){
        yield put({
        type: 'checkData',
        payload: response
      })
        yield put(routerRedux.push(`/platform`))
      }
      
      // window.location.href=`${host}/#/platform`;
    },
    *fetchGetMenu(_,{call,put}){
      let response = yield call(getMenu);
      yield put({
        type: 'getMenu',
        payload: response
      })
    }
  },

  reducers: {
    setLoadingStatus(state,action){
      return {
        ...state,
        loginStatus: action.loginStatus
      }
    },
    checkData(state, {payload}) {
      return {
       ...state, 
       loginStatus: payload?false:true
     };
    },
    getMenu(state,{payload}){
      return {
        ...state,
        menus: payload
      }
    }
  },

};
