function submitData () {
    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const emailReceiver = 'yusuffauziyan@gmail.com'

    console.log(nama);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (nama == '') {
        return alert ('Nama Wajib diisi');
    } else if (email == '') {
        return alert ('Email wajib di isi');
    } else if (phone == '') {
        return alert ('No Telp wajib di isi');
    } else if (subject == '') {
        return alert ('Pilih Subject');
    } else if (message == '') {
        return alert ('Pesan wajib di isi');
    }
    
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo Nama saya ${nama}. No Handphone: ${phone}. Pesan: ${message}`
    a.click()

    let dataObject = {
        namaLengkap: nama,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
    window.location.reload();
}



