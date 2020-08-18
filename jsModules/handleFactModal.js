const showModal = () => {
    document.querySelector('.fact-container').classList.add('on');
}

const hideModal = () => {
    document.querySelector('.fact-container').classList.remove('on');
}

export {showModal, hideModal};