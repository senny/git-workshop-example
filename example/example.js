$(document).ready(function($) {

    initializeValidators({
        'integer-field': buildIntValidator,
        'year-field': buildYearValidator
    });

});
