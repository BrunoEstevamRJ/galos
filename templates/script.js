

// Faz direcionamento para página do whatsapp
document.getElementById("sendMessage").addEventListener("click", function(event) {
    event.preventDefault();
    const message = document.getElementById("whatsappMessage").value;
    const phoneNumber = "+5521960160355";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});

// Um alertar de compra feita
function realizarCompra() {
    alert('Compra realizada com sucesso!!');
}

// Efeito de troca de páginas
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetUrl = this.href;

            document.body.classList.remove('fade-in');
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
