<template>
  <div class="login-container">
    <h1>Login</h1>
    <div v-if="errorMessage != ''">{{errorMessage}}</div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <button @click.once="login">Login</button>
    <form action="/api/login" ref="loginForm" method="POST">
      <input type="hidden" name="request_id" v-model="formData.requestId" />
      <input type="hidden" name="id_token" v-model="formData.idToken" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { getAuthInstance, signInWithEmailAndPassword } from '../firebase.config';

const route = useRoute()
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const formData = reactive({
  requestId: route.query.request_id || '',
  idToken: "",
})
const loginForm = ref<HTMLFormElement>();

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(await getAuthInstance(), email.value, password.value);
    const user = userCredential.user;
    formData.idToken = await user.getIdToken();
    nextTick(() => {
      loginForm.value!.submit();
    });
  } catch {
    errorMessage.value = 'Login failed. Please check your credentials.';
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
</style>
