var isFiltered;
var currentTypes;

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
		filterByTag(this);
	},
	"click .link-content .label": function () {
		filterByTag(this);
	},
	"change .checkbox-inline": function (evt) {
		if ($(evt.target).is(':checked')) {
			updateTypeArray(this, 'active');
		} else {
			updateTypeArray(this, 'inactive');
		}
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
	updateSessionVariable('links');
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
	updateLinksFromTypes();
}

updateLinksFromTypes = function(){
	Session.set('links', Links.find({ type: { $in : currentTypes}}).fetch());
	updateSessionVariable('links');
}

getCurrentTypeArray = function() {
	currentTypes = [];
	Session.get('types').forEach(function(type){
		currentTypes.push(type.title);
	});	
}

updateSessionVariable = function(sessionVar) {
	Tracker.autorun(function() {
		Session.get(sessionVar);
	});		
}


