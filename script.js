function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substitutir a imagem
  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    //se tiver em light mode, adicionar outra frase
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo com camisa preta e óculos escuro"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, com camisa preta e óculos"
    )
  }
}
