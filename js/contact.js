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

                // Set the message text.

                // Clear the form.
                $('#first-name').val('');
                $('#last-name').val('');
                $('#email').val('');
                $('#description').val('');
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
