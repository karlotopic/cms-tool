<template>
  <v-container id="inspire" class="justify-center">
    <v-card width="400" class="mx-auto ma-16 pa-5">
      <v-card-title class="pb-0 mb-5">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            label="Username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
    <v-alert
      type="error"
      transition="scale-transition"
      :value="alert"
      width="400"
      class="mx-auto ma-16 pa-5"
    >
      {{ errMessage }}
    </v-alert>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      showPassword: false,
      username: "",
      password: "",
      alert: false,
      errMessage: "",
    };
  },
  methods: {
    login: async function () {
      const username = this.username;
      const password = this.password;

      try {
        const { data } = await axios.post("http://localhost:3000/auth/login", {
          username,
          password,
        });
        this.$store.state.auth.accessToken = data.accessToken;
        this.$router.push("index");
      } catch (err) {
        const message = err.response.data.message;
        this.alert = true;
        this.errMessage =
          typeof message == "object" ? message.join(", ") : message;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
