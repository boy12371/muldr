Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
  	return [Meteor.subscribe('links'),Meteor.subscribe('tags')]; 
  }
});

Router.route('/', {name: 'linksList'});