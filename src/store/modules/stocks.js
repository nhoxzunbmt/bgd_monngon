import stocks from '@/data/stocks.js';

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state,stocks){
    state.stocks = stocks
  },
  'RND_STOCKS' (state){

  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit();
  },
  initStocks: ({ commit }, order) => {
    commit("SET_STOCKS", stocks);
  },
  radomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
   stocks: state => {
     return state.stocks
   }
}

export default {
  state,
  mutations,
  actions,
  getters
}
