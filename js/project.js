const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI Objesini Başlatma
const ui = new UI();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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
        ui.displayMessages("film başarıyla eklendi","success");
    }
    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}