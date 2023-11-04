// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

const markupImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link"  href="${original}"> <img class="gallery__image" src="${original}"  alt="${description}" /></a></li>`
  )
  .join(' ');

galleryUl.innerHTML = markupImg;
console.log(markupImg);
const settings = {
  captionsData: 'alt',
  captionDelay: 250,
};
console.dir(settings);

let gallery = new SimpleLightbox('.gallery__link', settings);
