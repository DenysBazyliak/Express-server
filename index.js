const http = require("http")

const todos = [
    {id:1, text:'Clean your room'},
    {id:2, text:'Walk your dog'},
    {id:3, text:'Learn to code'}]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        success:true,
        data:todos
    }))
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))