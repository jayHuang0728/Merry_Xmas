import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
const [PORT = 3000, HOST = `localhost`] = [process.env.PORT, process.env.CUSTOMVAR_HOSTNAME];


app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});

app.use('/', express.static(__dirname + '/views'));
// app.disable("etag");

// show index
app.route('/')
    .get((req, res) => {
        res.render('index');
    });



app.use((req, res, next) => {
    res.status(404).send('404!');
    next();
});


app.listen(PORT, () => console.log(`app started at http://${HOST}:${PORT}`));