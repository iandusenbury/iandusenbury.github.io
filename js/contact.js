$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            url: $(form).attr('action'),
            data: formData,
            type: 'POST',
            success: function(response) {
                $(formMessages).removeClass('error');
               // $(formMessages).addClass('success');

                // Set the message text.
               // $(formMessages).text(response);
                $('#contact .svg-wrap').addClass('show-check');
                setTimeout(function(){
                    $('#contact .svg-wrap').removeClass('show-check');
                }, 1300);

                // Clear the form.
                $('#clientname').val('');
                $('#email').val('');
                $('#companyname').val('');
                $('#description').val('');
            },
            error: function(error) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

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
