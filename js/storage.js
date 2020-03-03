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