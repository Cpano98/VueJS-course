<template>
  <Navbar />
  <div class="container">
    <div class="d-flex">
      <div class="col-4">
        <EntryList />
      </div>
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("../components/Navigationbar.vue")
    ),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style>
</style>