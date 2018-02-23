import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if(data){
                const stocks = data.stocks;
                const funds = data.funds;
                const stocksPorfolio = data.stocksPorfolio;

                const portfolio = {
                    stocksPorfolio,
                    funds
                };

                commit('SET_STOCKS',stocks);
                commit('SET_PORFOLIO',portfolio);
            }
        })
}