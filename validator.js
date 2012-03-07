function initializeValidators(fieldValidatorMap) {
    $.each(fieldValidatorMap, function(fieldId, validatorFun) {
        $('#'.concat(fieldId)).each(function(i, field) {
            var validator = validatorFun(field);
            registerValidatorEventHandler($(field), validator);
        });
    });
}

function registerValidatorEventHandler(field, validator) {
    field.change(function() {
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


// TODO: implement Value-Required Validator


function buildEmailValidator(field) {
  return {
    valid: function(errors) {
      var value = field.value;
      console.log(value);
      if (value.indexOf('@') === -1) {
        errors.push('Value is not a email-address.');
        return false;
      }

      var parts = value.split('.');
      var topLevelDomain = parts[parts.length - 1];
      if (topLevelDomain.length !== 2 && topLevelDomain.length !== 3) {
        console.log(parts, topLevelDomain);
        errors.push('Value is not a email-address.');
        return false;
      }

      var userPart = value.split('@')[0];
      if (userPart.length === 0) {
        errors.push('Value is not a email-address.');
        return false;
      }
      }

      return errors.length === 0;
    }
  };
}


// TODO: implement Year Validator
