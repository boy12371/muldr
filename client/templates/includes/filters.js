Template.filters.helpers({
  tags: function() {
    return Tags.find();
  }
});

Template.filters.rendered = function () {
  $(".chosen-select").chosen()
};



