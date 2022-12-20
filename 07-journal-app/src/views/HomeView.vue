<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h2>Hola Mundo!</h2>

    <button @click="goToDaybook" type="button" class="btn btn-primary">
      Ir a DayBook
    </button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
