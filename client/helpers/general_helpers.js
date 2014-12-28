UI.registerHelper('existingLink', function() {
	existingLinkID = Session.get('existingLinkID');    
    var existingLink = Links.findOne({_id: existingLinkID});
    return existingLink.title;
});