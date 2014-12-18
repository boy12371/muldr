 Template.loginForm.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();

      var email = t.find('#login-username').value
        , password = t.find('#login-password').value;

      Meteor.loginWithPassword(email, password, function(err){
        if (err) {      	
        	console.log(err.reason)
        }
        else {
          console.log('successfully logged in');
        }
      });
      
      return false; 
    },

    'click #logout-button' : function(e, t){
    	Meteor.logout();
    }
  });