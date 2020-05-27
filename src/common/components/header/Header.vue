<template>
  <nav>
    <div class="nav-wrapper header">
      <h2 class="logo">
        <a href="javascript:void(0)" class="brand-logo">Wellcome to vue 3.0</a>
      </h2>
      <ul class="right hide-on-med-and-down">
        <li v-if="isLoggedIn">
          <a class="flex-box">
            <i class="material-icons icon">assignment_ind</i>
            <span>{{ auth.name }}</span>
          </a>
        </li>
        <li v-if="isLoggedIn">
          <a class="flex-box" href="javascript:void(0)" @click="logout">
            <span>logout</span>
            <i class="material-icons icon">exit_to_app</i>
          </a>
        </li>
        <li v-if="!isLoggedIn"><a href="javascript:void(0)" @click="login">login</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const { authService } = inject('services');
    return {
      auth: authService.auth,
      isLoggedIn: authService.isLoggedIn,
      login: () => {
        authService.login();
      },
      logout: () => {
        authService.logout();
      },
    };
  },
});
</script>

<style scoped>
.header {
  margin: 0 20px 0 60px;
  overflow: hidden;
}
.logo {
  margin: 0;
  line-height: inherit;
}
.flex-box {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 1.25rem;
  margin: 0 5px;
}
</style>
