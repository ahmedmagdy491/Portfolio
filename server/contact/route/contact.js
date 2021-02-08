const {createContact} = require('../controller/contact')

const router = require('express').Router();



router
  .route('/newContact')
  .post(createContact)


module.exports = router