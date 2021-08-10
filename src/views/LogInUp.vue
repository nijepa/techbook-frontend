<template>
  <Form class="" @submit="handleLogin" :validation-schema="schema">
    <div>
      <Field
        id="email"
        name="email"
        type="email"
        required
        placeholder="email"
        
      />
      <!-- v-model="login.email" -->
      <label for="email">Your Name</label>
      <ErrorMessage name="username" class="error-feedback" />
    </div>
    <div>
      <Field
        id="password"
        name="password"
        type="password"
        required
        placeholder="password"
        
      />
      <!-- v-model="login.password" -->
      <label for="password">Password</label>
      <ErrorMessage name="password" class="error-feedback" />
    </div>
    <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
    <!-- <button type="submit" @click="logIn()">Log In</button> -->
  </Form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from '@vue/runtime-core';

export default {
  name: "LogIn",

  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const schema = ref(yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    }));

    let loading = ref(false)
    let message = ref('')

    const loggedIn = computed(() => store.state.auth.status.loggedIn);
console.log(loggedIn)
    //if (loggedIn) {
     // router.push("/profile");
  //  }

    const handleLogin = (user) => {
      loading = true;

      store.dispatch("auth/login", user).then(
        () => {
          router.push("/profile");
        },
        (error) => {
          loading = false;
          message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    };

    return {
      loading,
      message,
      schema,
      handleLogin
    };


    /*const login = ref({
      email: "",
      password: "",
    });
    return { login };*/
  },
};
</script>

<style lang="scss" scoped>
  Form  {
    display: grid;
    justify-content: center;
  }
</style>
