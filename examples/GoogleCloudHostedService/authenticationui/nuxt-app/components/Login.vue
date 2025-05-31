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
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { getAuthInstance, signInWithEmailAndPassword } from '../firebase.config';

const route = useRoute()
const requestId = route.query.request_id || '';
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(await getAuthInstance(), email.value, password.value);
    const user = userCredential.user;
    const token = await user.getIdToken();
    const response = await fetch(
      "/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify({
          requestId: requestId,
        }),
      }
    )
    if (response.status == 200) {
      const data = await response.json();
      window.location.href = data["url"];
    } else {
      const data = await response.json();
      errorMessage.value = data.message || 'unknown error';
    }
  } catch (error) {
    errorMessage.value = error
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
