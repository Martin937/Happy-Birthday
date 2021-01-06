"use strict";
window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('name-droid').onclick = function() {
        let name = prompt("Как ты меня назовёшь?", "дроид");

        if (name) {
            document.querySelector('#welcome').innerHTML = `Я - <b>${name}</b> !`;
            alert("Ура меня зовут - " + " " + name);
        } else {
            document.querySelector('#welcome').innerHTML = '<b>Хозяин</b>,<br> Ты не дал мне имени';
        }
    };



});