<template>
  <div id="app" class="container shadow">
    <Form @submit="handleSubmit">
      <h4 class="mb-2" style="color: black">LOGIN PAGE</h4>
      <div>
        <Field
          name="email"
          type="email"
          :rules="validateEmail"
          v-model="email"
          class="mb-3"
          placeholder="enter email"
          style="width: 25rem"
        />
      </div>
      <div>
        <ErrorMessage name="email" class="errmsg" />
      </div>
      <div>
        <Field
          name="password"
          type="text"
          v-model="password"
          :rules="validatePassword"
          class="mb-3"
          placeholder="enter password"
          style="width: 25rem"

        />
      </div>
      <div>
        <ErrorMessage name="password" class="errmsg" />
      </div>
      <button class="mb-2" style="width:10rem">submit</button>

      <p style="color: blue">Forgot password?</p>
      <p>
        <button type="button" class="btn btn-success" style="width: 15rem">
          Create new account
        </button>
      </p>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      email: "",
      password: "",
      confirmPass: false,
    };
  },
  methods: {
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "email field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },

    //validate password
    validatePassword(value) {
      if (value) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(value)) {
          return true;
        } else {
          return "*enter valid password";
        }
      } else {
        return "*password required";
      }
    },

    handleSubmit() {
      this.$store.commit("login");
      alert("You are logged in");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.errmsg {
  color: red;
}
.container {
  width: 100%;
  height: 460px;
  padding-top: 3%;
}
</style>
