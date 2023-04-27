const express = require('express');
const { lt, getLatLng } = require('../Controller/api_controller')
// const getData = data.getData;

const router = express.Router()

router.route('/sharepost').get(lt)
router.route('/getLatLng').get(getLatLng)

module.exports = router;