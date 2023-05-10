//import { generatePhotosArray } from './data.js';
import { dawnloadPictures } from './render-pictures.js';
import { addUploaderListeners } from './uploader-form-controller.js';
import { setupEffects } from './uploader-effects.js';

dawnloadPictures();
addUploaderListeners();
setupEffects();
