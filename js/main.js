function getIP() {
    fetch('https://ipinfo.io/ip').then((response) => {
        response.text().then((ip) => {
          document.getElementById('ip').innerText = "Tu dirección IP es: " + ip
        })
    })
}
