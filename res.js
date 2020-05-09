'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
} 


//response untuk nested servis
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama_user]){
            //buat variabel group nama user
            const group = akumulasikan[item.nama_user];            
            //cek jika isi array adalah sparepart
            if(Array.isArray(group.nama_sparepart, group.harga_sparepart, group.jumlah_sparepart, group.total)){
                //tambahkan value ke dalam group sparepart
                group.nama_sparepart.push(item.nama_sparepart);
                group.harga_sparepart.push(item.harga_sparepart);
                group.jumlah_sparepart.push(item.jumlah_sparepart);                
            }else {
                group.nama_sparepart = [group.nama_sparepart, item.nama_sparepart];
                group.harga_sparepart = [group.harga_sparepart, item.harga_sparepart];
                group.jumlah_sparepart = [group.jumlah_sparepart, item.jumlah_sparepart];                
            }
        }else {
            akumulasikan[item.nama_user] = item;            
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}