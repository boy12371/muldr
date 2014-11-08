Meteor.publish('links', function() {

   var links = Links.find();
   var tagIds = links.map(function(p) { return p.tagId });

   return [
  	 links,
  	 Tags.find({_id: {$in: tagIds}})
   ];
});

Meteor.publish('tags', function() {
  return Tags.find();
});

// Meteor.publish('linksWithTags', function() {
//   var links = Links.find();
//   var tagIds = links.map(function(p) { return p.tagId });

//   return [
//   	links,
//   	Tags.find({_id: {$in: tagIds}})
//   ];

// })



// Meteor.publish('topPostsWithTopComments', function() {
//   // first, get the top 30 posts
//   var topPostsCursor = Posts.find({}, {sort: {score: -1}, limit: 30});
//   // then extract those posts' userIds
//   var userIds = topPostsCursor.map(function(p) { return p.userId });

//   // then return an array containing both the posts, and their corresponding comments
//   return [
//     topPostCursor,
//     Meteor.users.find({_id: {$in: userIds}});
//   ];
// })


