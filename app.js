function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("card-resultado");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Você não digitou o nome de um animal.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let animal = "";
    let especie = "";
  
    // Itera info cada dado na lista de dados
    for (let dado of dados) {
      animal = dado.animal.toLowerCase()
      especie = dado.especie.toLowerCase()

      if (animal.includes(campoPesquisa) || especie.includes(campoPesquisa)) {
        // Constrói o HTML para cada item do resultado da pesquisa, incluindo o nome do personagem, descrição e link
        resultados += `
        <div class="card-animal">    
                <img src=${dado.imagem} alt="">            
                <div class="info">
                    <h2>${dado.animal}</h2>
                    <h3>Espécie: ${dado.especie}</h3>
                    <h3>Curiosidade: ${dado.curiosidade}</h3>                    
                </div>                           
            </div>            
            <div class="info-descricao">
                <p>${dado.info}</p>
                <a href="${dado.link}" target="_blank">Clique aqui e saiba mais!</a>  
            </div>
      `;
      }        
    }

    if (!resultados) {
      resultados = "<p> O animal escolhido ainda não foi adicionado.</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }
