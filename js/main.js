import { generatePhotosArray } from './data.js';
import { renderPictures } from './render-pictures.js';
import { PHOTOS_NUMBER } from './utils.js';
import { addListeners } from './uploader-form-controller.js';

addListeners();
renderPictures(generatePhotosArray(PHOTOS_NUMBER));
