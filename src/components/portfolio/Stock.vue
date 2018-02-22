<template>
<div class="col-md-6">
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">{{ stock.name }} - (Price : {{ stock.price }}) - (Quantity : {{ stock.quantity }})</h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number" class="form-control" v-model="quantity">
      </div>

      <div class="pull-right">
        <button class="btn btn-success" @click="sellStock">Sell</button>
      </div>


    </div>
    <div class="clearfix"></div>
  </div>


</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(
      {
        placeSellOrder: 'sellStock'
      }
    ),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        quantity: this.quantity,
              stockPrice: this.stock.price,
      };
      //this.$store.dispatch("sellStock", order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>

</style>