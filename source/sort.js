'use strict';

function sort(text) {
    var textcpy = text.trim();
    if (textcpy === '')
        return text;
    var a = textcpy.split(/\s+/);
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
