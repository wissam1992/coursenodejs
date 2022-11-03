const http=require('http')
const server=http.createServer((req,res)=>{
        if(req.url==='/home'){
        res.statusCode=200
        res.write('welcom in Home')}

        else if(req.url=='/about'){
            res.statusCode=200
            res.write('welcom in About')}
        
        else 
        {
            res.statusCode=404
            res.write('page not found')
        }
      
       
     res.end()

})
server.listen(3000,()=>{console.log('server is runing')})