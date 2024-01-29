const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        const nomePersonagem = document.getElementById('nome-personagem');
        const idPersonagem = personagem.attributes.id.value;

        personagem.classList.add('selecionado');

        if (window.innerWidth < 450) {
            windows.scrollto({ top: 0, behavior: 'amooth' });
        };

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        personagem.addEventListener('mouseout', () => {

            personagem.classList.remove('selecionado');

            personagens.forEach((personagemAtivado) => {
                if (personagemAtivado.classList.value.includes('ativado')) {
                    const idPersonagemAtivado = personagemAtivado.attributes.id.value;
                    
                    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagemAtivado}.png`;
                    nomePersonagem.innerText = personagemAtivado.getAttribute('data-name');
                    descricaoPersonagem.innerText = personagemAtivado.getAttribute('data-description');
                };
            });


        });
    });

    personagem.addEventListener('click', () => {

        desativandoPersonagem();

        personagem.classList.add('ativado');

    });

    function desativandoPersonagem() {

        const personagemAtivado =  document.querySelector('.personagem.ativado');
        
        if (personagemAtivado === null){
            return;
        } else {
            personagemAtivado.classList.remove('ativado');
        };
    };
});