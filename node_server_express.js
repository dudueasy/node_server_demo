let app = require('express')()

let port = 8001
app.listen(port,()=>{
  console.log(`server is running on ${port}`)
}) 

app.get('/api', (request, response, next)=>{
  response.send(
    {
      data:{
        id: '111',
        message:'request successed' 
      } 
    } 
  )
})

app.get('*', (request, response, next)=>{
  response.end('welcome!') 
})
