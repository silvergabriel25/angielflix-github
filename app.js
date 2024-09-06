function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('Resutados-pesquisa');
    // Imprime a seção no console para verificação (pode ser removido em produção)
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais informações do filme aqui!</a>
            </div>
        `;
    }

    // Atribui o HTML gerado à seção
    section.innerHTML = resultados;
}



 