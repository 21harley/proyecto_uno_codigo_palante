import ButtonNavActive from './components/Buttons.js';
import ToggolModal from './components/ToggleModal.js';
import CambioTema from './components/CambioTema.js';

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    ButtonNavActive();
    ToggolModal();
    CambioTema();
});