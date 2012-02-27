$(document).ready(function($) {

    initializeValidators({
        'integer-field': buildIntValidator,
      'email-field': buildEmailValidator
    });

});
