<template>
  <div>
    <div>
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }} <br/>
      Fibonacci = {{ fibResult }}
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
<!--    <div class="error" v-show="error">-->
<!--      {{ error }}-->
<!--    </div>-->
    <div class="messages">
      <template v-if="result < 0">Отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Просто результат</template>
    </div>
    <div>
      <button
          v-for="operator of operators"
          @click="calculate(operator)"
          :key="operator"
      >{{ operator }}</button>
    </div>
    <div class="logs">
      {{ logs }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    fibResult: 0,
    error: '',
    operators: ['+', '-', '/', '*'],
    logs: {},
  }),
  methods: {
    sum() {
      const { op1, op2 } = this;
      this.result = op1 + op2;
      this.fibResult = this.fib1 + this.fib2;
    },
    sub() {
      const { op1, op2 } = this;
      this.result = op1 - op2;
    },
    div() {
      const { op1, op2 } = this;
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя.';
      } else this.result = op1 / op2;
    },
    mult() {
      const { op1, op2 } = this;
      this.result = op1 * op2;
    },
    calculate(operation) {
      this.error = '';
      // eslint-disable-next-line default-case
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
      }

      // this.logs[Date.now()] = `${this.op1} ${operation} ${this.op2} = ${this.result}`;
      const key = Date.now();
      const logString = `${this.op1} ${operation} ${this.op2} = ${this.result}`;

      // this.logs = { ...this.logs, [key]: logString };
      // Vue.set();
      this.$set(this.logs, key, logString);
    },
    fib(n) {
      console.log(n);
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
  },
  computed: {
    fib1() {
      console.log(this.op1);
      return this.fib(this.op1);
    },
    fib2() {
      console.log(this.op2);
      return this.fib(this.op2);
    },
  },
};
</script>
