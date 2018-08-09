import { host } from '../common/config.js';
export default {

  namespace: 'content',

  state: {
    foldStatus: false
  },

  subscriptions: {
    
  },

  effects: {
    
  },

  reducers: {
    foldMenu(state, action) {
      return { 
        ...state,
        foldStatus: action.foldStatus
      };
    },
  },

};
