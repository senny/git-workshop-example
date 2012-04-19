$(document).ready(function($) {

    initializeValidators({
        'integer-field': buildIntValidator,
        'required-field': buildValueRequiredValidator});

});
