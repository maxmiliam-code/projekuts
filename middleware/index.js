var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasiadmin = require('./verifikasi');
var verifikasipengguna = require('./verifikasi');

//daftarkan menu
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi 
router.get('/api/v1/rahasia',verifikasiadmin(), auth.halamanrahasia);
router.get('/api/v1/totalservis',verifikasiadmin(), auth.tampiltotalservis);

//menu sparepart
router.post('/api/v1/inputsparepart',verifikasiadmin(), auth.inputsparepart);
router.put('/api/v1/ubahsparepart',verifikasiadmin(), auth.ubahsparepart);
router.delete('/api/v1/hapussparepart',verifikasiadmin(), auth.hapussparepart);
//menu montir
router.post('/api/v1/inputmontir',verifikasiadmin(), auth.inputmontir);
router.put('/api/v1/ubahmontir',verifikasiadmin(), auth.ubahmontir);
router.delete('/api/v1/hapusmontir',verifikasiadmin(), auth.hapusmontir);
//menu level
router.post('/api/v1/inputlevel',verifikasiadmin(), auth.inputlevel);
router.put('/api/v1/ubahlevel',verifikasiadmin(), auth.ubahlevel);
router.delete('/api/v1/hapuslevel',verifikasiadmin(), auth.hapuslevel);
//menu user
router.post('/api/v1/register',verifikasipengguna(), auth.registrasi);
router.post('/api/v1/inputuser',verifikasiadmin(), auth.registrasi);
router.put('/api/v1/ubahuser',verifikasiadmin(), auth.ubahuser);
router.delete('/api/v1/hapususer',verifikasiadmin(), auth.hapususer);
//menu servis
router.post('/api/v1/inputservis',verifikasiadmin(), auth.inputservis);
router.post('/api/v1/inputservis',verifikasipengguna(), auth.inputservis);
router.put('/api/v1/ubahservis',verifikasiadmin(), auth.ubahservis);
router.delete('/api/v1/hapusservis',verifikasiadmin(), auth.hapusservis);







module.exports = router;