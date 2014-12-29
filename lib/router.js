Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
  	return [Meteor.subscribe('links'),Meteor.subscribe('tags'),Meteor.subscribe('types')]; 
  }
});

Router.route('/', {name: 'linksList'});
Router.route('/submit', {name: 'linkSubmit'});
Router.route('/login', {name: 'loginForm'});
Router.route('/about', {name: 'about'});
Router.route('/links/:_id', {
  name: 'linkPage',
  data: function() { return Links.findOne(this.params._id); }  
});
Router.route('/links/:_id/edit', {
  name: 'linkEdit',
  data: function() { 
    Session.set('currentId', this.params._id);
    return Links.findOne(this.params._id); 
  }
});

//require logged in
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'linkSubmit'});
Router.onBeforeAction(requireLogin, {only: 'linkEdit'});
Router.onBeforeAction('dataNotFound', {only: 'linkPage'});