export const createTag = (tagContainer) => {
    for(let i = 0; i < 100; i++) {
        const tagEl = document.createElement('span');
        tagEl.innerText = i;
        tagEl.classList.add('tag');
        tagContainer.appendChild(tagEl);
    }
}