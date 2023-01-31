function sendMail(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    if(name === '' || email === '' || phone === '' || subject === '' || message === ''){
        alert('Semua field harus diisi')
    }else{
        const defaultEmail = 'rizkiramdhani2610@gmail.com'

        let sendTo = document.createElement('a')
        sendTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${message} tolong hubungin saya di ${phone}`
        sendTo.click()

        let sender = {
            name,
            email,
            phone,
            subject,
            message
        }

        console.table(sender)
        
        alert(`Sukses mengirim email ke ${defaultEmail}`)
    }
}