$(document).ready(function() {

    function submitForm() {

        let modal_success = $('#success');
        let modal_error = $('#error');


        $("[type=submit]").keyup(function(event){
            if(event.keyCode == 13){
                $(this).click();
            }
        });

        // function validName() {
        //     let input = $('[name=name]');
        //     let row = input.closest('.form__row_required');
        //
        //     input.on("blur", function() {
        //
        //         if ( $(this).val().match('^[а-яА-Я]{3,16}$') ) {
        //             row.removeClass('invalid')
        //             $(this).removeClass('invalid')
        //         } else {
        //             $(this).addClass('invalid');
        //             row.addClass('invalid')
        //         }
        //
        //     });
        // }
        // validName();

        // $('[name=name]').bind("change keyup input click", function() { this.value = this.value.replace(/[^а-яА-Я\s]/g, ''); });


        $('[type=submit]').on('click tab', function (e) {
            e.preventDefault();

            let form = $(this).closest('.form');
            let notspam = form.find('[name="notspam"]');
            notspam.val('Not spam');
            let fields = form.find('[required]');
            let field_name = form.find('[name=name]');
            let required_rows = form.find('.form__row_required');
            let url = form.attr('action');
            let formData = form.serialize();

            let empty = 0;

            let message_empty_field = 'Поле не может быть пустым';
            let message_valid_name = 'Имя не может состоять из цифр, символов и латиницы';

            fields.each(function (index, el) {
                if ($(this).val() === '') {
                    $(this).addClass('invalid');
                    $(this).parent().addClass('invalid');
                    $(this).siblings('.form__invalid').find('span').html(message_empty_field);

                    empty++;

                } else if (!field_name.val().match('^[а-яА-Я]{3,16}$')) {

                    field_name.addClass('invalid');
                    field_name.parent().addClass('invalid');
                    field_name.siblings('.form__invalid').find('span').html(message_valid_name);

                    empty++;

                } else {
                    $(this).removeClass('invalid');
                    $(this).parent().removeClass('invalid');
                    $(this).siblings('.form__invalid').find('span').html('');

                }
            });

            setTimeout(function () {
                fields.removeClass('invalid');
                required_rows.removeClass('invalid');
                $('.form__invalid').find('span').html('');
            }, 2500);

            function resetFields() {
                fields.each(function (index, el) {
                    $(this).val('');
                })
            }

            if (empty === 0) {

                $.ajax({
                    url:url,
                    type: "POST",
                    dataType: "html",
                    data: formData,
                    success: function (responce) {
                        console.log('success');
                        resetFields();
                        modal_success.modal('show');


                    },
                    error: function (responce) {
                        console.log('error');
                        resetFields();
                        modal_error.modal('show');
                    }
                })
            }
        });
    }

    submitForm();
})



// $('[name=cifri]').bind("change keyup input click", function() { this.value = this.value.replace(/[^0-9]/g, ''); });
// $('[name=bykvi]').bind("change keyup input click", function() { this.value = this.value.replace(/[^а-яА-Я\s]/g, ''); });
// $('[name=alfav]').bind("change keyup input click", function() { this.value = this.value.replace(/[^0-9а-яА-Яa-zA-Z\'\.\,\"\-\s]/g, ''); });

// $('[name=name]').on("blur", function() {
//     if ( $(this).val().match('^[а-яА-Я]{3,16}$') ) {
//
//         console.log("Valid name");
//     } else {
//         console.log("That's not a name");
//     }
// });

// $( '[name=name]').change(function() {
//
//     console.log($( this ).val());
//     // проверка значения input( $( this ).val() )
// });

// $('[name=name]').on('input', function() {
//      // get the current value of the input field.
//     console.log($(this).val());
// });
