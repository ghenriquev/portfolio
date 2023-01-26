function showMessageHTML() {
  let resHtml = document.querySelector("#resHtml");
  resHtml.style.display = "block";
  resHtml.innerHTML =
    "A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online.";
}

function hideMessageHTML() {
  resHtml.style.display = "none";
}

function showMessageCSS() {
  let resCss = document.querySelector("#resCss");
  resCss.style.display = 'block';
  resCss.innerHTML = "CSS é uma linguagem de folha de estilo composta por camadas, criada com propósito de estilizar as páginas HTML."
}

function hideMessageCSS() {
  resCss.style.display = "none";
}

function showMessageJs() {
  let resJs = document.querySelector('#resJs');
  resJs.style.display = 'block';
  resJs.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
}

function hideMessageJs() {
  resJs.style.display ='none'
}