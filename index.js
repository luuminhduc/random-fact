import {createTag} from './jsModules/createTag.js';
import {showModal, hideModal} from './jsModules/handleFactModal.js';

const tagContainer = document.querySelector('.tag-container'); 
const factContent = document.querySelector('.fact-content');
const btn = document.querySelector('.btn');
let factNumber;
let inProcess = false;

const checkBtn = () => {
    if(!inProcess) {
        btn.classList.add('on');
        btn.disabled = false;
    }else{
        btn.classList.remove('on');
        btn.disabled = true;
    }
}

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('hide')) {
        hideModal();
    }

    if(e.target.classList.contains('btn')) {
        startRandom();
    }
})

const startRandom = () => {
    inProcess = true;
    checkBtn();
    lightRandomTag();
    const tagInterval = setInterval(() => {
        eraseLight();
        lightRandomTag();
    }, 100);
    setTimeout(() => {
        clearInterval(tagInterval);
        eraseLight();
        lightRandomTag();
        factNumber = getFactNumber();
        getFact();
        inProcess = false;
        checkBtn();
    }, 5000)
}

async function getFact () {
    const res = await fetch(`http://numbersapi.com/${factNumber}/trivia?json`);
    const data = await res.json();
    factContent.innerHTML = `<p>${data.text}</p> <i class="fas fa-times hide"></i>`;
    showModal();
}

const getFactNumber = () => {
    return document.querySelector('.active').innerText;
}

const eraseLight = () => {
    document.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
}

const lightRandomTag = () => {
    const tagEls = document.querySelectorAll('.tag');
    [...tagEls][Math.floor(Math.random() * tagEls.length)].classList.add('active');
}



createTag(tagContainer);
startRandom();
checkBtn();