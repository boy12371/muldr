 Template.loginForm.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-username').value
        , password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err) {
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 	        	
        	console.log(err.reason)
        }
        else {
          // The user has been logged in.
          console.log('success');
        }
      });
         return false; 
      },
    'click #logout-button' : function(e, t){
    	Meteor.logout();
    }
  });