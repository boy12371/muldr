Links = new Mongo.Collection('links');

Meteor.methods({
  linkInsert: function(linkAttributes) {
    console.log(linkAttributes)
    check(Meteor.userId(), String);
    check(linkAttributes, {
      title: String,
      url: String,
      type: String,
      tags: Match.Optional([String])
    });
	var linkWithSameUrl = Links.findOne({url: linkAttributes.url});
    if (linkWithSameUrl) {
      return {
        linkExists: true,
        _id: linkWithSameUrl._id
      }
    } 
    var user = Meteor.user();
    var link = _.extend(linkAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    var linkId = Links.insert(link);
    return {
      _id: linkId
    };
  }
});