document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturahero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturahero){
            ocultaElementoHeader();
        } else{
            exibeElementoHeader();
        }
        
    })


    //Seção de atrações, porgramas das abas.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodas();
            aba.classList.add('shows__list--is-active');
            removeBtnAtv();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }
    //Seção FAQ, Accordion.
    for (let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', abreOuFecharesposta);
    }

});

    function abreOuFecharesposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }
    function removeBtnAtv(){
            const buttons = document.querySelectorAll('[data-tab-button]');

            for (i=0; i < buttons.length; i++){
                buttons[i].classList.remove('shows__tabs__button--is-active');
            }
    }
    function escondeTodas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    function ocultaElementoHeader(){
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementoHeader(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }