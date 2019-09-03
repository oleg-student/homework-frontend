'use strict';

const sort = (text) => {
    // trim spaces at the beginning and at the end
    // of passed text
    const trimmedText = text.trim();
    if (trimmedText === '')
        return text;
    const result = trimmedText.split(/\s+/);
    const collator = new Intl.Collator();
    return result.map((value) => {
        value = value.toLowerCase()
            .split('')
            .sort(collator.compare);
        value[0] = value[0].toUpperCase();
        return value.join('');
    }).sort(collator.compare)
        .join(' ');
};
