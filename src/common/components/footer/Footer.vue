<template>
  <footer class="page-footer">
    <div class="footer">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Vite vue3 router-next demo</h5>
          <p class="grey-text text-lighten-4">Powered by xxx, with:</p>
          <p class="grey-text text-lighten-4"><a href="https://github.com/vuejs/vue-next">vue@3.0.0-beta.*</a></p>
          <p class="grey-text text-lighten-4"><a href="https://github.com/vuejs/vue-router-next">vue-router@4.0.0-alpha.*</a></p>
          <p class="grey-text text-lighten-4"><a href="https://github.com/vuejs/vite">vite@0.16.0</a></p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><a class="btn-flat waves-effect grey-text text-lighten-3" href="https://www.google.com">Google</a></li>
            <li><a class="btn-flat waves-effect grey-text text-lighten-3" href="https://materializecss.com/">Materialize</a></li>
            <li><a class="btn-flat waves-effect grey-text text-lighten-3" href="https://www.apple.com">Apple</a></li>
            <li><a class="btn-flat waves-effect grey-text text-lighten-3" href="https://vuejs.org/index.html">Vue 2</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      <div class="footer">
        © 2020 No Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    return {};
  }
}
</script>

<style scoped>
.footer {
  margin: 0 20px 0 60px;
  overflow: hidden;
}
</style>
