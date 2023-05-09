import { generatePhotosArray } from './data.js';
import { renderPictures } from './render-pictures.js';
import { PHOTOS_NUMBER } from './utils.js';

renderPictures(generatePhotosArray(PHOTOS_NUMBER));
