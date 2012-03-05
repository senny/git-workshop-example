function initializeValidators(fieldValidatorMap) {
    $.each(fieldValidatorMap, function(fieldId, validatorFun) {
        $('#'.concat(fieldId)).each(function(i, field) {
            var validator = validatorFun(field);
            registerValidatorEventHandler($(field), validator);
        });
    });
}


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


// TODO: implement Value-Required Validator


// TODO: implement E-Mail Validator


// TODO: implement Year Validator
ajskldjaskl
