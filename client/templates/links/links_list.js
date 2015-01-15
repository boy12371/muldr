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
  },
  currentFilters: function() {
  	allTypes = Types.find().fetch();
  	currentFilterTypes = Session.get('types');
  	if (currentFilterTypes.length === allTypes.length || currentFilterTypes == '') {
  		return _.extend({currentFilters:[{title: 'all'}]},this);
  	} else {
  		return _.extend({currentFilters:currentFilterTypes},this);
  	}
  }
});

Template.linksList.rendered = function () {
	Session.set('types', Types.find().fetch()); 
};

Template.linksList.events({
	"click .tag-filter .item": function () {
		getCurrentTag(this);
	},
	"click .tag-badge": function () {
		getCurrentTag(this);
	},
	"change .type-checkbox": function (evt) {
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

updateLinksFromFilters = function(){
	// Tags, No Type
	if (currentTags != null && currentTypes.length < 1){
		Session.set('links', Links.find({tags: currentTags}).fetch());
	// Tags and Type
	} else if (currentTags != null && currentTypes.length > 0) {
		Session.set('links', Links.find({ type: { $in : currentTypes}, tags : currentTags}).fetch());		
	// No Tags, No Type
	} else if (currentTypes.length < 1 && currentTags == null){
		Session.set('links', Links.find().fetch());
	// Type, No Tag	
	} else {
		Session.set('links', Links.find({ type: { $in : currentTypes}}).fetch());
	}
	isFiltered = 'true';
	updateSessionVariable('links');
}

updateSessionVariable = function(sessionVar) {
	Tracker.autorun(function() {
		Session.get(sessionVar);
	});		
}


