Meteor.publish('links', function() {
  return Links.find();
});

Meteor.publish('tags', function() {
  return Tags.find();
});

Meteor.publish('types', function() {
  return Types.find();
});
