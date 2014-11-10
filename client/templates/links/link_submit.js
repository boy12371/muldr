Template.linkSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var link = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      tags: $(e.target).find('[name=tags]').val()
    };

    Meteor.call('linkInsert', link, function(error, result) {
    	if (error)
    	  return alert(error.reason);
    	// show this result but route anyway
	    if (result.linkExists)
	      return alert('This link has already been posted');
	    Router.go('linksList');
    });
  }
});

Template.linkSubmit.rendered = function () {
	$(".chosen-select").chosen({width: "100%"})
};