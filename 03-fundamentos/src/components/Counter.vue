<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button @click="decrease()">-1</button>

    <button v-on:click="increase()">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    TituloLibro: String,
    start: {
      type: Number, 
      default: 100,
      //required: true,
      validator(value) {
        return value > 100;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      console.log("Función disparada");
      return this.counter * this.counter;
    },
    increase() {
      return this.counter++;
    },
    decrease() {
      return this.counter--;
    },
  },
  computed: {
    squareCounter() {
      console.log("getSquareValue");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.TituloLibro || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>