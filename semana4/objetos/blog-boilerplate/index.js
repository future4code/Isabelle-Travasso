// function adicionaBlog() {

//     const capturaTitulo = document.getElementById("titulo-post")
//     const tituloValor = capturaTitulo.value
//     const capturaAutor = document.getElementById("autor-post")
//     const autorValor = capturaAutor.value
//     const capturaImagem = document.getElementById("imagem-post")
//     const imagemValor = capturaImagem.value
//     const capturaConteudo = document.getElementById("conteudo-post")
//     const conteudoValor = capturaConteudo.value
//     const imprimeBlog = document.getElementById("container-de-posts")


//     const objetoBlog = {
//         titulo: tituloValor,
//         imagem: imagemValor,
//         autor: autorValor,
//         conteudo: conteudoValor
//     }

//     capturaTitulo.value = ""
//     capturaAutor.value = ""
//     capturaConteudo.value = ""
//     capturaImagem.value = ""

//     if (objetoBlog.imagem.includes('.png') || objetoBlog.imagem.includes('.jpg') || objetoBlog.imagem == ""){
//        imprimeBlog.innerHTML += `<img class="postagemBlog" src=${objetoBlog.imagem}>`
//     } else {
//         alert('Link incorreto! Insira imagem válida')
//     }

//     imprimeBlog.innerHTML += `<div class="postagemBlog">${objetoBlog.titulo} <br> ${objetoBlog.autor} <br> ${objetoBlog.conteudo}</div>`

// }

// Desafio

const postagem = []

window.localStorage.getItem('postagem')

function adicionaBlog() {

    const pagina = window.open("./blog.html"),
    imprimeBlog = document.getElementById("container-de-posts")
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const imagem = document.getElementById("imagem-post")
    const conteudo = document.getElementById("conteudo-post")

    const objetoBlog = {
        titulo: titulo.Valor,
        imagem: imagem.Valor,
        autor: autor.Valor,
        conteudo: conteudo.Valor
    }

    postagem.push(objetoBlog)


    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""

    if (objetoBlog.imagem.includes('.png') || objetoBlog.imagem.includes('.jpg') || objetoBlog.imagem == ""){
       imprimeBlog.innerHTML += `<img class="postagemBlog" src=${objetoBlog.imagem}>`
    } else {
        alert('Link incorreto! Insira imagem válida')
    }

    imprimeBlog.innerHTML += `<div class="postagemBlog">${objetoBlog.titulo} <br> ${objetoBlog.autor} <br> ${objetoBlog.conteudo}</div>`

}

window.localStorage.setItem('postagem', postagem);