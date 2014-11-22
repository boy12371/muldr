var isFiltered;

Template.linksList.helpers({
  links: function() {
  	if (isFiltered != 'true') {
  		//initial load of all of the links
  		Session.set('links', Links.find().fetch()); 		
  	}
  	return Session.get('links');
  },
  tags: function() {
    return Tags.find();
  }
});

Template.linksList.events({
	"click .dropdown-menu li a": function () {
		filterByTag(this);
	},
	"click .link-content .label": function () {
		filterByTag(this);
	}
});

filterByTag = function(val){

	if(typeof val.title === 'string'){
		tagTitles = val.title;
		Session.set('links', Links.find({ tags: { $elemMatch : {title: tagTitles}}}).fetch());
		isFiltered = 'true';
	} else {
		Session.set('links', Links.find().fetch());
	}	
	Tracker.autorun(function() {
		Session.get('links');
	});
}


