function initializeValidators(fieldValidatorMap) {
    $.each(fieldValidatorMap, function(fieldId, validatorFun) {
        $('#'.concat(fieldId)).each(function(i, field) {
            var validator = validatorFun(field);
            registerValidatorEventHandler($(field), validator);
        });
    });
}

function registerValidatorEventHandler(field, validator) {
    field.blur(function() {
        var container = field.parents('li:first');
        container.find('.error').remove();

        var errors = [];
        var valid = validator.valid(errors);

        if(!valid) {
            container.addClass('erroneous');
            $(errors).each(function(i, msg) {
                $('<div class="error" />').text(msg).appendTo(container);
            });
        } else {
            container.removeClass('erroneous');
        }

    });
}

// Validators

function buildIntValidator(field) {
    return {
        valid: function(errors) {
            var value = field.value;
            if (isNaN(Number(value))) {
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


function buildValueRequiredValidator(field) {
    return {
        valid: function(errors) {
            if (field.value.length === 0) {
                errors.push('Value is required.');
                return false;
            } else {
                return true;
            }
        }
    };
}


// TODO: implement E-Mail Validator


// TODO: implement Year Validator
