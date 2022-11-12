// Prevent spam by inserting the email link with JavaScript
(function dynamicallyInsertEmailAddress() {
  $(document).ready(function() {
    var emailLink = $('#email');
    emailLink.attr('href', 'mailto:rpmoorey@gmail.com');
  });
}());
