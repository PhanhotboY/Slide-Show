const submitBtn = document.querySelector('.container .form button');
const input = document.querySelector('.form div input');
const slideContainer = document.querySelector('.container .slide_container');

submitBtn.onclick = async () => {
    const slideURL = document.querySelector('.container .form > input').value;
    slideContainer.innerHTML = '';

    for (let currPage = 1; currPage <= input.value; currPage++) {
        const imgElement = document.createElement('img');
        imgElement.src = slideURL.replace('{pageIndex}', currPage);
        slideContainer.appendChild(imgElement);
    }
};

const zoomInBtn = document.querySelector('.zoom_btn .zoom_in');
const zoomOutBtn = document.querySelector('.zoom_btn .zoom_out');
const container = document.querySelector('.container');
const containerWidth = container.clientWidth;
let slideContainerlWidth = (slideContainer.clientWidth / containerWidth) * 100;

zoomInBtn.onclick = () => {
    slideContainerlWidth += 10;
    slideContainer.style.width = slideContainerlWidth + '%';
};

zoomOutBtn.onclick = () => {
    slideContainerlWidth -= 10;
    slideContainer.style.width = slideContainerlWidth + '%';
};
