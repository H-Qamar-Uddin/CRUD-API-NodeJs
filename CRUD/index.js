const Express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/users');
const app = Express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRouter); 


app.listen(PORT, () => console.log(`server is running on ${PORT}`));