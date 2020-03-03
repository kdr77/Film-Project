function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();//filmleri varsa storageden al
    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films)); // local storageye ekle key değeri films
}
Storage.prototype.getFilmsFromStorage = function(){
    let films;
    if(localStorage.getItem("films") === null){//hiç film yoksa
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films"));//olan filmleri alma
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage(); //filmleri alıyoruz
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}