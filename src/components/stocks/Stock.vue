<template>
<div class="col-md-6">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">{{ stock.name }} - (Price : {{ stock.price }})</h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number" class="form-control" v-model="quantity">
      </div>

      <div class="pull-right">
        <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0">Buy</button>

        <button class="btn btn-success" @click="test">TEST</button>
      </div>


    </div>
    <div class="clearfix"></div>
  </div>


</div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    test() {
      let isInteger = Number.isInteger(this.quantity);
      console.log(isInteger);
    },
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

<style scoped>

</style>
