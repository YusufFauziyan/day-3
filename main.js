// Variable
// var
// let
// const

// TYPE
// let name = "yusuf"
// let age = 23
// console.log(`nama ${name} umur ${age} tahun`)


// -=========================-
// FUNCTION
// function bilangan() {
//     let bilSatu = 20
//     let bilDua = 30

//     let hasil = bilSatu + bilDua
//     return hasil
// }

// console.log(bilangan())

// function bilangan (bilSatu, bilDua) {
//     let hasil = bilSatu + bilDua
//     console.log(hasil)
// }

// bilangan(5, 5)

//-======================-
// function submitData() {
//     let name = document.getElementById('nama').value

//     console.log(name)

//     if (name == '') {
//         return alert ("Nama wajib diisi")
//     } //else if

//     let emailReceiver ='yusuffauziyan@gmail.com'

//     let a = document.createElement('a')
//     a.href = `mailto:${emailReceiver}` //?subject={subject}&body=Hallo my name ${name} ${message} please call me
//     a.click()
// }



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



