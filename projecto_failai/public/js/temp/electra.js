import {Data} from './data.js';

window.onload = function () {
    const main = new Data();
    main.getData();
    setInterval(main.loopFunction, 10 * 60 * 1000);
};