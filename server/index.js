import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';

const app = express ();
const port = 8000;

if(process.env.NODE_ENV != 'production') {
    app.use(webpackMiddleware(webpack(webpackConfig)))
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, '../client/public')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(port, () =>{
    winston.info('server successfully connected');
});
export default app;