/*
* Парсим урл на наличие утм метки
* */
function getParameterByName($name) {
    let name = $name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*
* Установка значений UTM-меток в соответствующие скрытые поля
* */
export default function setUTMtoInput() {
    let forms = [...document.querySelectorAll('form')];
    forms.map(($form) => {
        setValueInput('utm_source', getOrSetCookie('utm_source'), $form);
        setValueInput('utm_medium', getOrSetCookie('utm_medium'), $form);
        setValueInput('utm_campaign', getOrSetCookie('utm_campaign'), $form);
        setValueInput('utm_content', getOrSetCookie('utm_content'), $form);
        setValueInput('utm_term', getOrSetCookie('utm_term'), $form);
    });
}

/**
 * Присвоение значения скрытому полю, а также его создание в случае его отсутствия
 * */
function setValueInput(name, value, form) {
    let input = form.querySelector('[name=' + name + ']');
    if (input === null) {
        input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', name);
        form.appendChild(input);
    }
    input.value = value;
}

/*
* Получаем из cookies значения утм меток, коли нет, заебашим в куки
* */
function getOrSetCookie(name) {
    let $cookie = getCookie(name);

    if (getCookie(name) === undefined) {
        let date = new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000);//месяц
        $cookie = encodeURIComponent(getParameterByName(name));
        if ($cookie.length !== 0)
            document.cookie = `${name}=${$cookie}; path=/; expires=${date.toUTCString()}`;
    } else {
        $cookie = decodeURIComponent($cookie);
    }
    return $cookie;
}

/*
* Получаем кука
* */
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

setUTMtoInput();