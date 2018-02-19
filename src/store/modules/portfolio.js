const state = {
  funds: 10000,
  stocks:[]
};

const mutations = {
  BUY_STOCKS(state, {stockId,quantity,stockPrice}) {
    const record = state.stocks.find(elm => elm.id == stockId)
    if(record) {
      record.quantity += quantity;
    }
    else{
      state.stocks
    }
  },
  RND_STOCKS(state) {}
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit();
  },
  initStocks: ({ commit }, order) => {
    commit("SET_STOCKS", stocks);
  },
  radomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
