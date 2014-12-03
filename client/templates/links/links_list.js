// cool thing to do would be so currentTypes and currentTags load from Session variable, so choices would be remember even after page reload

var isFiltered;
var currentTypes = [];
var currentTags = null;

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
    return Tags.find();
  }
});

Template.filters.rendered = function () {
	Session.set('types', Types.find().fetch()); 
};

Template.linksList.events({
	"click .dropdown-menu li a": function () {
		// filterByTag(this);
		getCurrentTag(this);
	},
	"click .link-content .label": function () {
		// filterByTag(this);
		getCurrentTag(this);
	},
	"change .checkbox-inline": function (evt) {
		if ($(evt.target).is(':checked')) {
			updateTypeArray(this, 'active');
		} else {
			updateTypeArray(this, 'inactive');
		}
	}
});

getCurrentTag = function(selectedTag){
	if(typeof selectedTag.title === 'string'){
		currentTags = selectedTag.title;
	} else {
		currentTags = null;
	}
	updateLinksFromFilters();	
}

getCurrentTypeArray = function() {
	currentTypes = [];
	Session.get('types').forEach(function(type){
		currentTypes.push(type.title);
	});	
}

updateTypeArray = function(activeType, state){
	if(state === 'inactive') {
		getCurrentTypeArray();
		i = currentTypes.indexOf(activeType.title);
		currentTypes.splice(i,1);	
		Session.set('types', Types.find({ title: { $in : currentTypes}}).fetch());
		isFiltered = 'true';
	} else {
		getCurrentTypeArray();
		currentTypes.push(activeType.title);
		Session.set('types', Types.find({ title: { $in : currentTypes}}).fetch());
		isFiltered = 'true';
	}
	updateSessionVariable('types');
	updateLinksFromFilters();	
}

updateLinksFromFilters = function(){
	console.log(currentTags)
	if(currentTags != null){
		console.log('using tags');
		Session.set('links', Links.find({ type: { $in : currentTypes}, tags: { $elemMatch : {title: currentTags}}}).fetch());
	} else {
		console.log('not using tags');
		Session.set('links', Links.find({ type: { $in : currentTypes}}).fetch());
	}
	updateSessionVariable('links');
}

updateSessionVariable = function(sessionVar) {
	Tracker.autorun(function() {
		Session.get(sessionVar);
	});		
}


