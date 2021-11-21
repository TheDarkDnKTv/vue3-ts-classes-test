<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script lang="ts">
  // Decorator test

  import { Options, Vue } from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  export default class HelloWorld extends Vue {
    @Prop()
    msg!: string
  }
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
