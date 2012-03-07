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


  module('E-Mail validator');

  test('email addresses are valid', function()
       {
         expect(2);
         var errors = [];
         equal(buildEmailValidator({value: 'example@gmail.com'}).valid(errors), true);
         deepEqual(errors, []);
       });

  test('value without @ is not valid', function()
       {
         expect(2);
         var errors = [];
         equal(buildEmailValidator({value: 'examplegmail.com'}).valid(errors), false);
         deepEqual(errors, ['Value is not a email-address.']);
       });

  test('needs a 2-3 character top level domain ', function()
       {
         expect(4);
         var errors = [];
         equal(buildEmailValidator({value: 'example@gmail.com1'}).valid(errors), false);
         deepEqual(errors, ['Value is not a email-address.']);

         errors = [];
         equal(buildEmailValidator({value: 'example@gmail.c'}).valid(errors), false);
         deepEqual(errors, ['Value is not a email-address.']);
       });

  test('user part is required', function()
       {
         expect(2);
         var errors = [];
         equal(buildEmailValidator({value: '@examplegmail.com'}).valid(errors), false);
         deepEqual(errors, ['Value is not a email-address.']);
       });


    // TODO: Year Validator Tests


});
