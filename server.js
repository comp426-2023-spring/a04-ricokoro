#!/usr/bin/env node
import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot))).end();
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot))).end();
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot))).end();
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot))).end();
})

app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
})

app.listen(port);