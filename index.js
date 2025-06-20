const http = require("http")

const todos = [
    { id: 1, text: 'Clean your room' },
    { id: 2, text: 'Walk your dog' },
    { id: 3, text: 'Learn to code' }]

const server = http.createServer((req, res) => {
    const { method, url } = req

    let body = []

    req.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()

        let status = 404
        const response = {
            success: false,
            data: null
        }

        if (method === 'GET' && url === 'todos') {
            status = 200
            response.success = true
            response.data = data
        }

        res.writeHead(200, {
            'Context-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        })

        res.end(JSON.stringify({
            success: true,
            data: todos
        }))
    })


})

const PORT = 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))