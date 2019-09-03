'use strict';

function sort(text) {
    var textcpy = text.trim();
    var a = textcpy.split(/\s+/);

    if (a.length === 0)
        return text;
    else if (a[0] === '')
        return text;

    var collator = new Intl.Collator();

    a = a.map(function (value) {
        value = value.toLowerCase();
        value = value.split("");
        value = value.sort(collator.compare);
        value[0] = value[0].toUpperCase();
        return value.join('');
    });
    a = a.sort(collator.compare);
    return a.join(' ');
}