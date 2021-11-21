<template>
    <div>
        <h3>test123</h3>
        <div>{{ test }}</div>

        <form>
            <input ref="newText" type="text">
            <button @click.prevent="submitText()">Change state</button>
        </form>
    </div>
</template>

<script lang="ts">
    // Vuex testing

    import { Vue } from 'vue-class-component';
    import { State, Mutation } from 'vuex-class';

    export default class VuexTest extends Vue {

        @State
        private test! : any;

        @Mutation
        private updateTest!: Function;

        submitText() {
            let el = this.$refs.newText as HTMLInputElement;
            if (el.value) {
                this.updateTest(el.value);
            }
        }
    }
</script>

<style scoped>

</style>
