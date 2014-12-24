Template.layout.getUserSession = function(){	
	console.log('hello');
	console.log(UserSession.equals('messageDismissed', true));
	if(UserSession.equals('messageDismissed', true)){
		$('.message').hide();
	}
};

Template.layout.events({
	//hide message at top
	'click .message .close': function(e){
		$(e.target).closest('.message').slideUp();
		UserSession.set('messageDismissed', true);
		console.log(UserSession.equals('messageDismissed', true));
	}
});
