<template>
  <div class="container center">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <blockquote class="cyan accent-2" v-if="m">{{ m }}</blockquote>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import HelloWorld from '../../common/components/examples/HelloWorld.vue';

export default defineComponent({
  name: 'ExamplePage',
  components: {
    HelloWorld,
  },
  setup() {
    const route = useRoute();
    return {
      ...route.params,
    };
  },
});
</script>
