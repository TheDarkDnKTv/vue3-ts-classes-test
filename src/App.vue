<template>
  <div>
    <h2>{{ test }}</h2>
    <h2>{{ test1 }}</h2>
    <button @click="check1()">null</button>
    <button @click="check2()">value</button>
    <HelloWorld msg="pog"/>
    <VuexTest/>
  </div>
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component';
  import HelloWorld from "@/components/HelloWorld.vue";
  import VuexTest from "@/components/VuexTest.vue";

  @Options({
    components: {
      HelloWorld, VuexTest
    }
  })
  export default class App extends Vue {

    // Default property
    private test: string | null = "test"; // set type can be null or undefined

    // Lifecycle hooks
    created() {
      console.log("kekw");
    }

    // Computed properties
    private get test1() {
      return this.test?.length;
    }

    // Methods
    private check1() {
      this.test = null;
    }

    private check2() {
      this.test = "New value";
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
