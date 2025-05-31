export default defineEventHandler((event) => {
    const method = event.node.req.method
    
    setHeader(event, 'Access-Control-Allow-Origin', '*')
    setHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')
    setHeader(event, 'Access-Control-Allow-Credentials', 'true')
  
    if (method === 'OPTIONS') {
      setHeader(event, 'Access-Control-Max-Age', '86400') // 24 hours
      event.node.res.statusCode = 204 // No Content
      event.node.res.end()
      return
    }
  })