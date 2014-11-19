var isFiltered;

Template.linksList.helpers({
  links: function() {
  	if (isFiltered == 'true') {
  		//do nothing, because we are setting the links value in the click event
  	} else {
  		Session.set('links', Links.find().fetch());  		
  	}
  	return Session.get('links');
  },
  tags: function() {
  	allTags = Tags.find();
    return allTags;
  }
});

Template.linksList.events({
	"click .dropdown-menu li a": function () {
		// filterByTag();
		//get value of dropdown
		if(typeof this.title === 'string'){
			val = [this.title];
			Session.set('links', Links.find({ tags: { $in : val}}).fetch());
		} else {
			Session.set('links', Links.find().fetch());
		}		
		//rerun, and get session links
		Tracker.autorun(function() {
			isFiltered = 'true'; //tell the helper that we are filtering, so it doesnt set the session collection
			Session.get('links');
		});
	}
});


// filterByTag = function(val){
// 	console.log('being filter');
// }


