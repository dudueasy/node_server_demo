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

app.post('/post/api',(request, response, next)=>{ 
  let body = request.body | 'null'
  response.send(`服务器收到了以下数据: ${body}`) 
}) 

app.use('*', (request, response, next)=>{
  response.end('welcome!') 
})
