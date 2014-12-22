 Template.loginForm.events({

  'submit #login-form' : function(e, t){
    console.log('submitted');
    e.preventDefault();

    var email = t.find('#login-username').value;
    var password = t.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err){
      if (err) {      	
        console.log(err.reason);
        Session.set("formErrors", err.reason);
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

 Template.loginForm.helpers({
    formErrors: function() {
      var formErrors = Session.get("formErrors");
      return formErrors;
  }
 });

 Template.loginForm.rendered = function(){

  $('.ui #login-form').form({
    username: {
      identifier: 'username',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your username'
        }
      ]
    },
    password: {
      identifier: 'password',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    errorMessage: {
      identifier: 'error-message',
      rules: [
        {
          type: 'is[User not found]',
          prompt: 'User not found'
        },
        {
          type: 'is[Incorrect Password]',
          prompt: 'Password Incorrect'
        }
      ]
    }  
  })
};