// Pega os livros que já estão salvos
let livros = JSON.parse(localStorage.getItem("livros")) || [];


// CADASTRAR LIVRO
const form = document.getElementById("formLivro");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        // Pegar os valores digitados
        let nome = document.getElementById("nome").value;
        let autor = document.getElementById("autor").value;
        let categoria = document.getElementById("categoria").value;
        let quantidade = document.getElementById("quantidade").value;
        let status = document.getElementById("status").value;

        // Verificar a quantidade
        if (quantidade > 0) {

            // Criar o objeto do livro
            let livro = {
                nome: nome,
                autor: autor,
                categoria: categoria,
                quantidade: quantidade,
                status: status
            };

            // Adicionar o livro na lista
            livros.push(livro);

            // Salvar no localStorage
            localStorage.setItem("livros", JSON.stringify(livros));

            alert("Livro cadastrado com sucesso!");

            // Limpar o formulário
            form.reset();

        } else {

            alert("A quantidade deve ser maior que zero.");

        }

    });

}


// MOSTRAR LIVROS
const lista = document.getElementById("listaLivros");

if (lista) {

    // Verificar se existem livros
    if (livros.length === 0) {

        lista.innerHTML = "<p>Nenhum livro cadastrado.</p>";

    } else {

        // Percorrer todos os livros
        livros.forEach(function(livro, index) {

            lista.innerHTML += `
                <hr>

                <h2>${livro.nome}</h2>

                <p><strong>Autor:</strong> ${livro.autor}</p>

                <p><strong>Categoria:</strong> ${livro.categoria}</p>

                <p><strong>Quantidade:</strong> ${livro.quantidade}</p>

                <p><strong>Status:</strong> ${livro.status}</p>

                <button onclick="excluirLivro(${index})">
                    Excluir
                </button>

                <br>
            `;

        });

    }

}


// EXCLUIR LIVRO
function excluirLivro(index) {

    if (confirm("Deseja realmente excluir este livro?")) {

        livros.splice(index, 1);

        localStorage.setItem("livros", JSON.stringify(livros));

        alert("Livro excluído!");

        location.reload();

    }

}
