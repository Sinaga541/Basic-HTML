function validasi(form) {
   var nama = document.getElementById("Nama").value;
   var NIM = document.getElementById("NIM").value;
  


  if(NIM == ""){
    alert('NIM tidak boleh kosong');
    return false;
  }

  if(NIM.length < 7){
    alert('nim harus memiliki 7 karakter')
    return false;
  }

  pola_nim=/^[a-zA-Z0-9\_\-]{7,100}$/;
  if (!pola_nim.test(NIM)){
     alert ('nim hanya menerima angka dan huruf');
     return false;
  }
  
   if(nama == ""){
    alert('Nama tidak boleh kosong');
    return false;
  }

  return true;
}


