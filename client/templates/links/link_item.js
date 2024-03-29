//adds url to link item template
Template.linkItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  prettifyDate: function() {
  	return this.submitted.toLocaleDateString();
  },
});

Template.linkItem.rendered = function () {
  $('.ui.accordion').accordion();
  $('.link-summary').hide();
};

Template.linkItem.events({
	"click .summary-toggle": function (e) {
		$(e.currentTarget).closest('.item').find('.link-summary').slideToggle('fast');
	}
});