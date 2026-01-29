function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fotoperfil.jpeg")
  } else {
    // Agora o caminho aponta corretamente para a pasta assets
    img.setAttribute("src", "./assets/fotoperfil.jpeg")
  }
}