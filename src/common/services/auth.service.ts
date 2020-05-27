import { reactive, ref, Ref } from 'vue';
import fetch from 'ajax-fetch-esm';
import { Authentication } from '../models/auth.model';

let instance: AuthService = null;

class AuthService {
  private baseUrl = '/auth/api/user';
  private loginUrl: string = 'http://localhost:7000/sso/login?ret=';
  private logoutUrl: string = 'http://localhost:7000/sso/logout?ret=';

  public isLoggedIn: Ref<boolean> = ref(false);
  public auth: Authentication = reactive({});

  constructor() {
    console.log('-1-');
    this.fetchUser();
  }

  private fetchUser(): Promise<Authentication> {
    // return fetch.get(this.baseUrl).then((user: any) => {
    return Promise.resolve({ id: 1, name: 'Joker', phone: 110 }).then((user: any) => {
      console.log('[User]: ', user);
      this.auth.identity = user.id;
      this.auth.name = user.name;
      this.auth.phone = user.phone || '';
      if (this.auth.identity) {
        this.isLoggedIn.value = true;
      }
      return this.auth;
    }).catch((err) => {
      console.error(err);
      return {};
    });
  }

  public checkAuth(): Promise<boolean> {
    console.log('-=- ', this.isLoggedIn.value);
    if (this.isLoggedIn.value) {
      return Promise.resolve(true);
    } else {
      return this.fetchUser().then((auth) => !!auth.identity);
    }
  }

  public login(backUrl: string = location.href): void {
    location.href = `${this.loginUrl}${encodeURIComponent(backUrl)}`;
  }

  public logout(backUrl: string = location.href): void {
    location.href = `${this.logoutUrl}${encodeURIComponent(backUrl)}`;
  }
}

if (!instance) {
  instance = new AuthService();
}

export default instance;