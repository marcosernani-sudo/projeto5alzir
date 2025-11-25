function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Aqui você poderia integrar com API Gateway + Lambda no futuro
    console.log("Mensagem enviada:", { nome, email, mensagem });

    document.getElementById("msg-sucesso").textContent =
        "Mensagem enviada com sucesso! Obrigado por entrar em contato.";

    document.querySelector("form").reset();
}
