export default defineEventHandler(async (event) => {
    const body = await readBody(event); 
    console.log(body);
    if (body.request_id == "valid_request_id") {
        return '<html><body><h1>Login Successful</h1><p>Your request ID is valid.</p></body></html>';    
    } else {
        throw createError({
            statusCode: 400,
            statusMessage: 'request_id is expired',
        })
    }
})