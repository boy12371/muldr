Template.linksList.helpers({
  links: function() {
    return Links.find();
  },
  tags: function() {
  	return Tags.find();
  }
});
