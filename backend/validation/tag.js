const validText = require('./valid_text');

module.exports = function validateTagInput(tag) {
    let errors = {};

    tag.name = validText(tag.name) ? tag.name : '';

    if (!validText(tag.name)) errors.name = 'Cannot be empty.';
    if (tag.name.includes(" ")) errors.name = `No spaces!`

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}