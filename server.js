import axios from 'axios';
import express from 'express';
const { Router } = express;
const routes = new Router();

const token = ''

routes.get('/test', async (req, res) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    try {
        const { data } = await axios.get('https://api.plainness.com.br/v1.0/GetEmpresa/5042', { headers })
        return res.json({ status: 200, data })
    } catch (err) {
        return res.json({ status: err?.response.status || 500, data: err?.response.data || err })
    }
});

const app = express();
app.disable('x-powered-by');
app.use(express.json(), routes);
app.listen(3333);
console.log('App listening on port 3333');
