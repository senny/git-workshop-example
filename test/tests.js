$(document).ready(function(){
    module('Integer validator');

    test('Number is valid (value: "2").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '2'}).valid(errors), true);
             deepEqual(errors, []);
         });

    test('Non-number is not valid (value: "foo").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: 'foo'}).valid(errors), false);
             deepEqual(errors, ['Value is not a number.']);
         });

    test('Floating point numbers are not valid (value: "7.3").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '7.3'}).valid(errors), false);
             deepEqual(errors, ['Floating points are not allowed.']);
         });

    test('Comma is not a valid character (value: "8,4").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '8,4'}).valid(errors), false);
             deepEqual(errors, ['Value is not a number.']);
         });

    test('Values with mixed characters (0-9, A-Z, etc.) are' +
         ' not valid (value: "12foo").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '12foo'}).valid(errors), false);
             deepEqual(errors[0], 'Value is not a number.');
         });

    test('Zero is valid (value: "0").', function()
         {
             expect(2);
             var errors = [];
             equal(buildIntValidator({value: '0'}).valid(errors), true);
             deepEqual(errors, []);
         });


    // TODO: Value-Required Validator Tests


    // TODO: E-Mail Validator Tests


  module('Year validator');

  test('must be a 4 digit number', function()
       {
         expect(2);
         var errors = [];
         equal(buildYearValidator({value: '1928'}).valid(errors), true);
         deepEqual(errors, []);
       });

  test('non 4 digit numbers are invalid', function()
       {
         expect(4);
         var errors = [];
         equal(buildYearValidator({value: '192'}).valid(errors), false);
         deepEqual(errors, ['Value must match the format yyyy']);

         errors = [];
         equal(buildYearValidator({value: '19222'}).valid(errors), false);
         deepEqual(errors, ['Value must match the format yyyy']);
       });

  test('must be a number', function()
       {
         expect(2);
         var errors = [];
         equal(buildYearValidator({value: 'asdj'}).valid(errors), false);
         deepEqual(errors, ['Value is not a number.']);
       });

});
