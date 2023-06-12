const {configureStore}=require('@reduxjs/toolkit');
const {counterReducer}=require('../featues/counter');

const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

module.exports.store=store