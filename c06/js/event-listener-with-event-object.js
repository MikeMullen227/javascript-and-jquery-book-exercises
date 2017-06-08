   function checkLength(e, minLength) {      // Declare Function
       var el, elMsg;                        // Declare Variables
       if(!e) {                              // If event object doesn't exist
           e = window.event;                 // Use IE Fallback
       }
       el = e.target || e.srcElement;        // Get target of event
       elMsg = el.nextSibling;               // Get its next sibling
       
       if (el.value.length < minLength) {    // If length is too short set msg
           elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more.';
       } else {                              // Otherwise
           elMsg.innerHTML = '';             // Clear message
       }
   }

    var elUsername = document.getElementById('username');    // Get username input
    if (elUsername.addEventListener) {                       // If event listener supported
        elUsername.addEventListener('blur', function(e) {    // On blur event
            checkLength(e, 5);                               // Call checkLength()
        }, false);                                           // Capture in bubble phase
    } else {
        elUsername.attachEvent('onblur', function(e) {
            checkLength(e, 5);
        });
    }