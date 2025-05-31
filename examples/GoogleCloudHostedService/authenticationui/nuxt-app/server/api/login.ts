export default defineEventHandler(async (event) => {
    const body = await readBody(event); 
    console.log(body);
    //const object = JSON.parse(body);
    setHeader(event, 'Content-Type', 'application/json')
    if (body.requestId == "valid_request_id") {
        return {
            url: "https://example.com",
        }    
    } else {
        throw createError({
            statusCode: 400,
            statusMessage: 'request_id is expired',
        })
    }
})