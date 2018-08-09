import { adminData, search } from '../services/user.js';
export default {

  namespace: 'user',

  state: {
    adminData: []
  },

  subscriptions: {
    
  },

  effects: {
   *fetchAdminData(_,{call,put}){
    const response = yield call(adminData);
    yield put({
      type: 'adminData',
      payload: response
    })
   },
   *fetchSearch({payload},{call,put}){
    const response = yield call(search,payload);
    yield put({
      type: 'search',
      payload: response
    })
   }
  },

  reducers: {
    adminData(state,payload){
      return {
        ...state,
        adminData: payload.payload.data
      }
    },
    search(state,payload){
      return {
        ...state,
        adminData: payload.payload.data
      }
    }
  },

};
