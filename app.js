function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
    

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se o  campo pesquisa for uma string sem nada
if (!campoPesquisa){
section.innerHTML = "<p>Nada foi encontrado. Faça uma Busca</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

 console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <div id="player"></div>
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        // Cria uma nova div para cada resultado, formatando o HTML com as informações do dado
        
    }

    if (!resultados) {
        
        resultados = "<p><strong>Nada foi encontrado</strong></p>";
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;

}



