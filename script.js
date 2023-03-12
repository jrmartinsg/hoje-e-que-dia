function carregar() {
    var semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    var mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    var title = document.getElementsByTagName('title')[0]
    var icon = document.getElementById('icon')
    var d = document.getElementById('data')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()

    d.innerHTML = `${semana[data.getDay()]}, ${data.getDate()} de ${mesAno[data.getMonth()]} de ${data.getFullYear()}`

    if (hora >= 0 && hora < 5) {
        // Madrugada
        title.innerText= 'Boa Madrugada!'
        icon.href = './imgs/lua.png'
        msg.innerHTML = `Boa Madrugada! Agora são ${hora} horas e ${min} minutos!`
        document.body.style.backgroundColor = '#111139'
        msg.style.color = '#111139'
        msg.style.fontWeight = '700'
        msg.style.fontSize = '20px'
        img.src = './imgs/noite.png'
    }
    else if (hora < 12) {
        // Dia
        msg.innerHTML = `Bom Dia! Agora são ${hora} horas e ${min} minutos!`
        document.body.style.backgroundColor = '#fcbb4b'
        msg.style.color = '#fcbb4b'
        msg.style.fontWeight = '700'
        img.src = './imgs/dia.png'
    }
    else if (hora >= 12 && hora <= 18) {
        // Tarde
        title.innerText= 'Boa Tarde!'
        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${min} minutos!`
        document.body.style.backgroundColor = '#CB8A16'
        msg.style.color = '#CB8A16'
        msg.style.fontWeight = '700'
        img.src = './imgs/tarde.png'
    }
    else {
        // Noite
        title.innerText= 'Boa Noite!'
        icon.href = './imgs/lua.png'
        msg.innerHTML = `Boa Noite! Agora são ${hora} horas e ${min} minutos!`
        document.body.style.backgroundColor = '#111139'
        msg.style.color = '#111139'
        msg.style.fontWeight = '700'
        img.src = './imgs/noite.png'
    }
}