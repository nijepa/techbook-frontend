<template>
  <form class="">
    <div>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="email"
        v-model="login.email"
      />
      <label for="email">Your Name</label>
    </div>
    <div>
      <input
        id="password"
        name="password"
        type="password"
        required
        placeholder="password"
        v-model="login.password"
      />
      <label for="password">Your Name</label>
    </div>
    <button type="submit" @click="logIn()">Log In</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "LogIn",

  setup() {
    const login = ref({
      email: "",
      password: "",
    });
    return { login };
  },
};
</script>

<style></style>
