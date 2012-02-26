$(document).ready(function(){
    module('Integer validator');

    test('Number is valid.', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '2'}).valid(errors), true);
             deepEqual(errors, []);
         });

    test('Non-number is not valid.', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: 'foo'}).valid(errors), false);
             deepEqual(errors[0], 'Value is not a number.');
         });

    test('Floating point numbers are not valid.', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '7.3'}).valid(errors), false);
             deepEqual(errors, ['Floating points are not allowed.']);
         });

    test('Zero is valid.', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '0'}).valid(errors), true);
             deepEqual(errors, []);
         });

});
