<template>
<div>
  <AddPaymentForm
      @add-payment="addNewPayment"
      :categoryList="categoryList"
  />
  <PaymentDisplay :items="paymentsList"/>
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentDisplay from '../components/PaymentDisplay.vue';
import AddPaymentForm from '../components/AddPaymentForm.vue';

export default {
  name: 'Dashboard',
  components: {
    PaymentDisplay,
    AddPaymentForm,
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategoryListData',
    ]),
    ...mapMutations([
      'ADD_PAYMENT_DATA',
      'UPDATE_PAYMENT_DATA',
    ]),
    addNewPayment(payment) {
      this.ADD_PAYMENT_DATA(payment);
    },
    editPayment() {
      this.UPDATE_PAYMENT_DATA({
        date: '28.03.2020',
        category: 'Food',
        value: 10000,
      });
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
  },
  created() {
    console.log(this.$route);
    this.fetchData();
    this.fetchCategoryListData();
  },
};
</script>

<style scoped>

</style>
