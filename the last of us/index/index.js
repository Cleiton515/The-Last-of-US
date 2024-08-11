const menuopen = document.querySelector('#menu-open');
menuopen.addEventListener('click', openmenu);

function openmenu(){
    let close = document.querySelector('#close');
    let barras = document.querySelector('#barras');
    let menu = document.querySelector('#menu');
    let photo = document.querySelector('.photos');
    menu.style = 'transform: translateX(0);'
    photo.style = 'display: none;'
    barras.style = 'display: none;'
    close.style = 'font-size: 1.5rem;'
}

const menuclose = document.querySelector('#close');
menuclose.addEventListener('click', closemenu);

function closemenu(){
    let closee = document.querySelector('#close');
    let barrass = document.querySelector('#barras');
    let menuu = document.querySelector('#menu');
    let photoo = document.querySelector('.photos');
    menuu.style = 'transform: translateX(100%);'
    photoo.style = 'display: ;'
    barrass.style = 'display: ;'
    closee.style = 'font-size: 0;'
}

const plays = document.querySelector('#video');
plays.addEventListener('click', rodarvideo);

function rodarvideo(){
    let video = document.querySelector('#video');
    let texto = document.querySelector('#texto');
    let youtube = document.querySelector('#youtube');
    let txt = document.querySelector('#txt');
    let txxt = document.querySelector('#txxt');
    let txxxt = document.querySelector('#txxxt');
    txt.style = 'display:none;'
    txxt.style = 'display:none;'
    txxxt.style = 'display:none;'
    youtube.style = 'width:660px; height: 425px; border: double rgb(229, 46, 46) 8px; transition:ease-in-out width .5s;'
    video.style = ' display: none;'
    texto.style = 'display: block;'
}

const texxto = document.querySelector('#texto');
texxto.addEventListener('click', backtexto);

function backtexto(){
    let viideo = document.querySelector('#video');
    let texxxto = document.querySelector('#texto');
    let yooutube = document.querySelector('#youtube');
    let tsxt = document.querySelector('#txt');
    let tsxxt = document.querySelector('#txxt');
    let tsxxxt = document.querySelector('#txxxt');
    texxxto.style = 'display: none;'
    yooutube.style = 'display: none; transition:ease-in-out width .5s;'
    viideo.style = 'display: block;'
    tsxt.style = 'display:;'
    tsxxt.style = 'display:;'
    tsxxxt.style = 'display:; margin-bottom: 3rem;'
}

