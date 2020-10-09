//require
const { Router } = require('express');
const newsletterController = require('../controllers/newsletterController');

const router = Router();

router.post('/newsletter', newsletterController.mail_post); 

module.exports = router;    