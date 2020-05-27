<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="state.count++">count is: {{ state.count }}</button>
    <p class="flow-text teal">{{ state.countDesc }}</p>
    <input v-model="name" />
    <p>{{ state.fullName }}</p>
    <blockquote>{{ desc }}</blockquote>
  </div>
</template>

<script lang="ts">
import { reactive, watch, ref, computed } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      readonly: true,
    },
  },
  setup(props: Readonly<{ msg: string }>) {
    const state = reactive({
      count: 0,
      countDesc: 'Count is 0',
      fullName: '',
    });
    const name = ref('name?');
    watch([() => state.count, name], async ([count, name], _, onCleanup) => {
      state.countDesc = `Count is ${count}`;
      let timer;
      onCleanup(() => {
        clearTimeout(timer);
      });
      state.fullName = await new Promise((resolve) => {
        timer = setTimeout(() => {
          console.log('--> ', name);
          resolve(`${name} Lee`);
        }, 1000);
      });
    });
    const desc = computed(() => {
      return state.fullName + ' --- ' + state.count;
    });
    return {
      // msg: props.msg + '!---!',
      state,
      name,
      desc,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
