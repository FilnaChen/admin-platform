import { changePwd } from '../services/system.js';
export default {

  namespace: 'system',

  state: {
    changeStatus: {}
  },

  subscriptions: {
    
  },

  effects: {
   *fetchChangePwd({payload},{call,put}){
    const response = yield call(changePwd,payload);
    yield put({
      type: 'changePwd',
      payload: response
    })
   }
  },

  reducers: {
    changePwd(state,payload){
      return {
        ...state,
        changeStatus: payload
      }
    }
  },

};
