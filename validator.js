function buildIntValidator(field) {
    return {
        valid: function(errors) {
            var value = field.value;
            if (isNaN(parseInt(value, 10))) {
                errors.push('Value is not a number.');
                return false;

            } else if (parseInt(value, 10) !== parseFloat(value, 10)) {
                errors.push('Floating points are not allowed.');
                return false;

            } else {
                return true;
            }
        }
    };
}
