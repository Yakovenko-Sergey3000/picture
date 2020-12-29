import forms from './modules/forms';
import modals from './modules/modals';
import slider from './modules/slider';
import maskNumber from './modules/maskNumber';
import validName from './modules/validName';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';


document.addEventListener('DOMContentLoaded', () => {

const state = {}

modals();
slider('.feedback-slider-item', '','.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertically');
forms(state);
maskNumber('[name="phone"]');
validName('[name="name"');
showMoreStyles('.button-styles', '#styles .row');
calc('#size', '#material', '#options', '.promocode', '.calc-price', state)
filter();
pictureSize('.sizes-block');
accordion('.accordion-heading');
burger('.burger-menu', '.burger');
});