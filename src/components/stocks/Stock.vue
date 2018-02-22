<template>
<div class="col-md-6">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">{{ stock.name }} - (Price : {{ stock.price }})</h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number" class="form-control" v-model="quantity" :class="{danger : isQuantityValid}">
      </div>

      <div class="pull-right">
        <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0">Buy</button>

      </div>


    </div>
    <div class="clearfix"></div>
  </div>


</div>
</template>
<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds(){
      return this.$store.getters.funds  
    },
    isQuantityValid() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
