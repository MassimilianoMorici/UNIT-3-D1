// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// EXTRA 1
function sparisciNelNulla() {
    let sparisciNelNulla = document.querySelector(`aside div:nth-of-type(3) :nth-child(2) :nth-child(2)`)
    sparisciNelNulla.remove()
}

window.onload = sparisciNelNulla()


// EXTRA 2
for (let link of document.querySelectorAll(".font-weight-bold"))
    link.onclick = function (event) {
            event.preventDefault() // this prevents the browser to actually follow the link!
            event.target.closest(".col-md-6").remove();
        }


// EXTRA 3        
for (let author of document.querySelectorAll(".blog-post-meta a"))
    author.addEventListener("mouseover", function (event) {
    alert(event.target.innerText);
});
        



