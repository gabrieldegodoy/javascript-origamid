// NAVEGAÇÃO POR TABS

//Adicionar Classes para Manipulação
//A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

//Selecionar os itens
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  //Função Callback
  //Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  //Adicionar o Evento
  //Neste caso precisamos passar antes a função anônima no callback, para podermos passar o index como argumento de activeTab

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

// ACCORDION LIST

