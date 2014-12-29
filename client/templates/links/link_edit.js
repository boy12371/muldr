Template.linkEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentLinkId = this._id;

    var tags = [];
    $('.checked input[name=tag]').each(function() {
      tags.push($(this).val());
    });    

    var link = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=link-title]').val(),
      type: $(e.target).find('[name=link-type]').val(),
      tags: tags
    };

    existingUrl = checkSameUrl(link);

    if(existingUrl) {
      if(existingUrl._id === this._id){
        //its all good just update the link
      } else {
        Session.set('formError', 'That link has already been posted');
        Session.set('existingLinkID', existingUrl._id);
        return;
      }
    }

    Links.update(currentLinkId, {$set: link}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('linksList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this link?")) {
      var currentLinkId = this._id;
      console.log(this._id);
      Links.remove(currentLinkId);
      Router.go('linksList');
    }
  }
});

Template.linkEdit.helpers({
  tags: function() {
    return Tags.find();
  },
  types: function() {
    return Types.find();
  },
  formError: function() {
    var formError = Session.get('formError');
    return formError;
  },
  isChecked: function() {
    currentId = Session.get('currentId');
    var currentLink = Links.findOne(Session.get('currentId'));
    return _.contains(currentLink.tags, this.title) ? 'checked' : '';
  }
});


Template.linkEdit.rendered = function(){

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
    }        
  });
};