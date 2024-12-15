// Espera o carregamento completo do conteúdo da página
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa o serviço EmailJS com a chave pública
    (function() {
        emailjs.init("DzVJWU-B2p-J6C6gh");
    })();

    // Adiciona um listener para o envio do formulário
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar página)

        // Coleta os dados do formulário para enviar via EmailJS
        let templateParams = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            textarea: document.getElementById('textarea').value
        };

        // Envia os dados do formulário para o EmailJS
        emailjs.send('service_mq4ywvw', 'template_2mcponn', templateParams)
            .then(function(response) {
                // Se o e-mail for enviado com sucesso
                console.log('SUCCESS!', response.status, response.text);
                alert("Email enviado com sucesso!");
            }, function(error) {
                // Se houver erro no envio do e-mail
                console.log('FAILED...', error);
                alert("Falha ao enviar o email.");
            });
    });

    // Funcionalidade de scroll suave para links de ancoragem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de navegação
            // Realiza o scroll suave para a seção alvo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interatividade dos vídeos: reproduzir ao passar o mouse e pausar ao retirar
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play(); // Reproduz o vídeo
        });
        video.addEventListener('mouseout', () => {
            video.pause(); // Pausa o vídeo
        });
    });
});
