Template.filters.helpers({
  tags: function() {
    return Tags.find();
  },
  types: function() {
    return Types.find();
  },
  currentTags: function() {
    return Session.get('tags');
  },
  currentTypes: function() {
    return Session.get('types');
  }
});

Template.filters.rendered = function () {
  $('.ui.dropdown').dropdown();
  $('.ui .checkbox').checkbox();

$('.browse')
  .popup({
    inline: true,
    on: 'click',
    hoverable: true,
    position : 'bottom left',
    delay: {
      show: 150,
      hide: 500
    }
  });

  $('.ui.sticky')
    .sticky({
      context: '#footer',
      offset: 60
    });  
};





