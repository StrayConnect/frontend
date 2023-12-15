// Returns true if all the input fields are valid
export const validFormInput = (...fields) => {
    fields.forEach((field) => {
        if(field == null || field == undefined || field.trim() == '') return false;
    })
    return true;
}

// Validates that every error field is empty 
export const validateErrorFields = (...errorField) => {
    errorField.forEach((err) => {
        if(err != '') return false;;
    })
    return true;
}