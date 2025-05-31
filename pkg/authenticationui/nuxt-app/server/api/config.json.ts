export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    return {
        apiKey: runtimeConfig.firebaseApiKey,
        authDomain: runtimeConfig.firebaseAuthDomain,
    }
})