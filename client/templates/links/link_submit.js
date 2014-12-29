//fun to someday combine formerrors here and on login into single method for form validation

Template.linkSubmit.events({
  'submit form': function(e) {

    e.preventDefault();

    var tags = [];
    $('.checked input[name=tag]').each(function() {
      tags.push($(this).val());
    });    

    var link = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=link-title]').val(),
      type: $(e.target).find('[name=link-type]').val(),
      summary: $(e.target).find('[name=link-summary]').val(),
      tags: tags
    };

    Meteor.call('linkInsert', link, function(error, result) {
    	if (error) {
        return alert(error.reason);
      }
    	if (result.linkExists) {  
        Session.set('formError', 'That link has already been posted');
        Session.set('existingLinkID', result._id);
      } else {
        Router.go('linksList');
      }

    });
      
  }
});

Template.linkSubmit.helpers({
  tags: function() {
  	return Tags.find();
  },
  types: function() {
    return Types.find();
  },
  formError: function() {
    var formError = Session.get('formError');
    return formError;
  } 
});

Template.linkSubmit.rendered = function(){
  //clear form errors
  Session.set('formError', '');

  // initialize some stuff
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();

  // form validation stuff
  $('#link-submit-form').form({
    title: {
      identifier: 'link-title',
      rules: [
        {
          type: 'empty',
          prompt: 'Please provide a title.'
        }
      ]
    },
    url: {
      identifier: 'url',
      rules: [
        {
          type: 'url',
          prompt: 'Please enter a valid URL, which must include the "http://" portion.'
        }
      ]
    },  
    type: {
      identifier: 'link-type',
      rules: [
        {
          type: 'empty',
          prompt: 'Please select a type.'
        }
      ]
    },
    summary: {
      identifier: 'link-summary',
      rules: [
        {
          type: 'empty',
          prompt: 'Please provide a summary.'
        }
      ]
    }             
  });
};