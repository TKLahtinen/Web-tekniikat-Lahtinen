//Määritellään tarpeelliset asiat sivulta
let sentNotes = document.getElementById("sentNotes");
let nappula = document.querySelector("#sendButton");

//Lisätään kuuntelija
nappula.addEventListener("click", addNote);


/**
 * @param {Event} event
 */
function addNote(event){
    event.preventDefault();
    
    //Haetaan nimi, viesti ja päivämäärä
    let formElem = document.getElementById("noteForm");
    let formData = new FormData(formElem);
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let name = formData.get("name");
    let note = formData.get("note");
    let important = formData.get("important");

    //Tehdään elementit viestille
    let newNote = document.createElement("div");
    let noteName = document.createElement("h3");
    let noteText = document.createElement("p");

    //Lisätään tekstit ja tyyli viestiin
    noteName.textContent = day + "." + month + "." + year + " (" + name + ")";
    noteText.textContent = note;
    newNote.classList.add("basic");

    //Lisätään elementit sivulle omille paikoilleen
    newNote.appendChild(noteName);
    newNote.appendChild(noteText);
    sentNotes.appendChild(newNote); 

    //Ehtolause jos important on päällä
    if(important == "on"){
        newNote.classList.add("important");
    }

}