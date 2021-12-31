const exp = require('express')
const app = exp()
const port = 8081
app.get('/',(request,response) => {
    response.send('Hello express')
})
app.listen(port, () => {
    console.log(`listening on the port ${port}`)
})

