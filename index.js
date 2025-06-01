const http = require("http")

const todos = [
    { id: 1, text: 'Clean your room' },
    { id: 2, text: 'Walk your dog' },
    { id: 3, text: 'Learn to code' }]

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Context-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    })

    let body = []

    req.on('data', chunk =>{
        body.push(chunk)
    }).on('end', ()=>{
        body = Buffer.concat(body).toString()
        console.log(body)
    })

    res.end(JSON.stringify({
        success: true,
        data: todos
    }))
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))