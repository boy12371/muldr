Links = new Mongo.Collection('links');

Meteor.methods({
  linkInsert: function(linkAttributes) {
    check(Meteor.userId(), String);
    check(linkAttributes, {
      title: String,
      url: String,
      type: String,
      tags: Match.Optional([String])
    });

    if(checkSameUrl(linkAttributes)) {

      return checkSameUrl(linkAttributes);
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

checkSameUrl = function(linkAttributes){
    var linkWithSameUrl = Links.findOne({url: linkAttributes.url});
    if (linkWithSameUrl) {
      return {
        linkExists: true,
        _id: linkWithSameUrl._id
      }
    }
}

Links.allow({
  update: function(userId, link) { return link },
  remove: function(userId, link) { return link },
});

// Links.deny({
//   update: function(userId, link, fieldNames) {
//     // may only edit the following two fields:
//     // return (_.without(fieldNames, 'url', 'title').length > 0);
//     console.log('hello');
//     return fieldNames;
//   }
// });
