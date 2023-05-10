import { generatePhotosArray } from './data.js';
import { renderPictures } from './render-pictures.js';
import { PHOTOS_NUMBER } from './utils.js';
import { addUploaderListeners } from './uploader-form-controller.js';
import { setupEffects } from './uploader-effects.js';

addUploaderListeners();
setupEffects();
renderPictures(generatePhotosArray(PHOTOS_NUMBER));
