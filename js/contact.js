$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        $('.button-content').addClass('animate');

        // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            url: $(form).attr('action'),
            data: formData,
            type: 'POST',
            success: function(response) {

                // Clear the form.
                $('#first-name').val('');
                $('#last-name').val('');
                $('#email').val('');
                $('#description').val('');

                $('.svg-wrap').addClass('success');
                $('button').mouseleave(function(){
                    $('.button-content').removeClass('animate');
                    $('.svg-wrap').removeClass('success');  
                });
            },
            error: function(error) {
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            }
        });
    });
});
