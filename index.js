// import express from 'express';
const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send({ 'hi' : 'wecome to the app'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);