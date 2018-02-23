<template>
  <div>

    <nav class="navbar navbar-default" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand" activeClass="active">XXX</router-link>

      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">

        <ul class="nav navbar-nav">
          <li><router-link to="/portfolio" activeClass="active" tag="a">Portfolio</router-link>
          </li>
          <li><router-link to="/stocks" activeClass="active" tag="a">Stocks</router-link>
          </li>
        </ul>
      <strong class="navbar-text navbar-right">{{ funds | currency }}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Day</a></li>
          <li><a href="#" @click="saveData">Save Data</a></li>
                    <li><a href="#" @click="loadData">Load Data</a></li>

        </ul>

      </div><!-- /.navbar-collapse -->

    </nav>

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
        return this.$store.getters.funds
    }
  },
  methods:{
    ...mapActions({
      fetchData: 'loadData'
    }),
    saveData(){
       const data = {
         funds : this.$store.getters.funds,
         stocks: this.$store.getters.stocks,
         stocksPorfolio: this.$store.getters.stockPortfolio,
       }
       this.$http.put('data.json',data)
    },
    loadData(){
        this.fetchData();
    }
  }
};
</script>

<style scoped>

</style>
