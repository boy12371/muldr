Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
  	return [Meteor.subscribe('links'),Meteor.subscribe('tags')]; 
  }
});

Router.route('/', {name: 'linksList'});
Router.route('/submit', {name: 'linkSubmit'});

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