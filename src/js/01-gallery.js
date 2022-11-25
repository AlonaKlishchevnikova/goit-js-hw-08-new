

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createImgCardMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);
galleryEl.addEventListener('click', onGalleryElClick)
function createImgCardMarkup( galleryItems ) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;

    }).join('');

}
function onGalleryElClick(e) {
       e.preventDefault();
 
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

};
new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    fadeSpeed: 250,
   
 });

