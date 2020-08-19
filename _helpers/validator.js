import validate from 'validate.js';
let Validator = class {
    get() {
        return 'g';
    }
    all(formValues, constraints) {
        const result = validate(formValues, constraints)
        if (result) {
            try {
                return true;
            } catch (error) {

            }
        }
        return null;
    }
    single(fieldName, value, constraints) {
        var formValues = {};
        formValues[fieldName] = value
        var formFields = {};
        formFields[fieldName] = constraints[fieldName];
        const result = validate(formValues, formFields);
        if (result) {
            try {
                return result[fieldName][0]
            } catch (error) {

            }
        }
        return null;
    }
}
export default Validator;