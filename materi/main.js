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
function submitData() {
    let name = document.getElementById('nama').value

    console.log(name)

    if (name == '') {
        return alert ("Nama wajib diisi")
    } //else if

    let emailReceiver ='yusuffauziyan@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}` //?subject={subject}&body=Hallo my name ${name} ${message} please call me
    a.click()
}