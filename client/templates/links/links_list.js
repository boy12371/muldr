// cool thing to do would be so currentTypes and currentTags load from Session variable, so choices would be remember even after page reload

var isFiltered;
var currentTypes = [];
var currentTags = [];

Template.linksList.helpers({
  links: function() {
  	// check to see if filter is being set by click event
  	if (isFiltered != 'true') {
  		// initial load of all of the links
  		Session.set('links', Links.find().fetch()); 		
  	}
  	return Session.get('links');
  },
  tags: function() {
  	// check to see if filter is being set by click event
  	if (isFiltered != 'true') {
  		// initial load of all of the links
  		Session.set('links', Links.find().fetch()); 		
  	}
  	return Session.get('links');
  }
});

Template.linksList.rendered = function () {
	Session.set('types', Types.find().fetch()); 
	Session.set('tags', Tags.find().fetch()); 
};

Template.linksList.events({
	"change .tag-checkbox": function (evt) {
		if ($(evt.target).is(':checked')) {
			updateTagArray(this, 'active');
		} else {
			updateTagArray(this, 'inactive');
		}
	},
	"change .type-checkbox": function (evt) {
		if ($(evt.target).is(':checked')) {
			updateTypeArray(this, 'active');
		} else {
			updateTypeArray(this, 'inactive');
		}
	}
});


updateTypeArray = function(activeType, state){
	if(state === 'inactive') {
		i = currentTypes.indexOf(activeType.title);
		currentTypes.splice(i,1);	
		Session.set('types', Types.find({ title: { $in : currentTypes}}).fetch());
	} else {
		currentTypes.push(activeType.title);
		Session.set('types', Types.find({ title: { $in : currentTypes}}).fetch());
	}
	updateSessionVariable('types');
	updateLinksFromFilters();	
}

updateTagArray = function(activeTag, state){
	if(state === 'inactive') {
		i = currentTags.indexOf(activeTag.title);
		currentTags.splice(i,1);	
		Session.set('tags', Tags.find({ title: { $in : currentTags}}).fetch());
	} else {
		currentTags.push(activeTag.title);
		Session.set('tags', Tags.find({ title: { $in : currentTags}}).fetch());
	}
	updateSessionVariable('tags');
	updateLinksFromFilters();	
}

updateLinksFromFilters = function(){
	// No Tags, No Type
	if (currentTags.length < 1 && currentTypes.length < 1){
		Session.set('links', Links.find().fetch());
	// Tags and Type
	} else if (currentTags.length > 0 && currentTypes.length > 0) {
		Session.set('links', Links.find({ type: { $in : currentTypes}, tags : { $in : currentTags}}).fetch());		
	// Tags, No Type
	} else if (currentTags.length > 0 && currentTypes.length < 1){
		Session.set('links', Links.find({ tags : { $in : currentTags}}).fetch());	
	// Type, No Tag	s
	} else {
		Session.set('links', Links.find({ type : { $in : currentTypes}}).fetch());	
	}
	isFiltered = 'true';
	updateSessionVariable('links');
}

updateSessionVariable = function(sessionVar) {
	Tracker.autorun(function() {
		Session.get(sessionVar);
	});		
}


