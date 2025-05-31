// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, type Auth } from "firebase/auth";

async function getAuthInstance(): Promise<Auth> {
  const response = await fetch('/api/config.json')
  const firebaseConfig = await response.json()
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
}

export { getAuthInstance, signInWithEmailAndPassword };
