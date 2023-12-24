// Returns true if all the input fields are valid
export const validFormInput = (...fields) => {
    let output = true;
   fields.forEach((field) => {
    if(field == null || field == undefined || field.trim() == ''){
        output = false;
    }
   })
   return output;
}


// Validates that every error field is empty 
export const validateErrorFields = async (...errorField) => {
    const isValid = errorField.every(async (err) => {
        return err === '';
    });

    return isValid;
}
