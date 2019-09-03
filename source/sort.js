'use strict';

const sort = (text) => {
    // trim spaces at the beginning and at the end
    // of passed text
    var trimmedText = text.trim();
    if (trimmedText === '')
        return text;
    var a = trimmedText.split(/\s+/);
    var collator = new Intl.Collator();
    a = a.map((value) => {
        value = value.toLowerCase()
            .split('')
            .sort(collator.compare);
        value[0] = value[0].toUpperCase();
        return value.join('');
    });
    a = a.sort(collator.compare).join(' ');
    return a;
}
