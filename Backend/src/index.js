import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.get('*', (req, res) => {
  res.status(500).send(`No api endpoint ${req.route.path} exists.`);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
