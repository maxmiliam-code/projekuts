var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasiadmin = require('./verifikasi');
var verifikasipengguna = require('./verifikasi');

//daftarkan menu
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi admin
router.get('/api/v1/rahasia',verifikasiadmin(), auth.halamanrahasia);
router.post('/api/v1/inputservis',verifikasiadmin(), auth.inputservis);
router.post('/api/v1/inputservis',verifikasipengguna(), auth.inputservis);
router.post('/api/v1/inputmontir',verifikasiadmin(), auth.inputmontir);
router.post('/api/v1/inputsparepart',verifikasiadmin(), auth.inputsparepart);
router.post('/api/v1/register',verifikasipengguna(), auth.registrasi);
router.post('/api/v1/inputlevel',verifikasiadmin(), auth.inputlevel);
router.post('/api/v1/register',verifikasiadmin(), auth.registrasi);

router.put('/api/v1/ubahmontir',verifikasiadmin(), auth.ubahmontir);
router.put('/api/v1/ubahsparepart',verifikasiadmin(), auth.ubahsparepart);
router.put('/api/v1/ubahuser',verifikasiadmin(), auth.ubahuser);
router.put('/api/v1/ubahlevel',verifikasiadmin(), auth.ubahlevel);
router.put('/api/v1/ubahservis',verifikasiadmin(), auth.ubahservis);



module.exports = router;