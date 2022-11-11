import axios from "axios";
import setUTMtoInput from "./volodec_utm";

[...document.querySelectorAll('form[action]')].map(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let formData = new FormData(form);

        axios({
            method: 'post',
            url: form.getAttribute('action'),
            data: formData
        })
            .then((response)=> {
                console.log(form.getAttribute('data-metrika'));
                metriks(form.getAttribute('data-metrika'));
                showThanks();
                clearValue(form.querySelectorAll('input:not([type=hidden]), textarea'));

            })
            .catch((error)=> console.log(error));

        return false;
    });
});



function clearValue (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].value = '';
    }

}

setUTMtoInput();

window.metriks = function (id) {
    console.log('metriks entry');

    ym(44878075, 'reachGoal', id);
    console.log('yandex');

    gtag('event', id, {
        'event_category' : 'wingsLanding'
    });
    console.log('google');

    return true;
};