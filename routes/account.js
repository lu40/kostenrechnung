const express = require('express')
const router = express.Router() 
const Account = require('../models/account')

//New Account Form
router.get('/new', (req, res) => {
    res.render('account/new', { account: new Account() })
})

//Create New Account Item
router.post('/account', (req, res) => {
    const account = new Account({
        amount: req.body.amount
    })
account.save()
})


module.exports = router