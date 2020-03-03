const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI Objesini Başlatma
const ui = new UI();
//Storage Objesi üretme
const storage = new Storage();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        ui.displayMessages("boş alan bırakmayınız","danger");
    }else {
        const newFilm = new Film(title,director,url);//Yeni film oluşturma
        ui.addFilmToUI(newFilm); //aRAYÜZE FİLMİ GÖNDERME
        storage.addFilmToStorage(newFilm); // Arayüze eklenen filmi storage içine gönderme
        ui.displayMessages("film başarıyla eklendi","success");
    }
    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id==="delete-film"){// e.target a elementini veriyor
        ui.deleteFilmFromUI(e.target);
        //film ismiine göre sorgulama yaparak silme işlemini yapıyoruz.

        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("silme işlemi başarılı","success");
    }
}
function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
    
}