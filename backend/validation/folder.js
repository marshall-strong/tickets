const Validator = require("validator");
const validText = require("./valid_text");

module.exports = function validateFolderInput(folder) {
    let errors = {};
    folder.name = validText(folder.name) ? folder.name : "";

    if (Validator.isEmpty(folder.name)) {
        errors.name = "Folder name cannot be empty";
    }

    return {
        errors,
        isValid: !Object.keys(errors).length
    };
};