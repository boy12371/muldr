Template.filters.helpers({
  tags: function() {
    return Tags.find();
  },
  types: function() {
    return Types.find();
  },
  isChecked: function(){
  	var checked = true;
  	return checked;
  }
});

Template.filters.events({
  "click #types-menu-item": function () {
    $('#types-menu-item').addClass('active');
    $('#types-sub-menu').toggle();
  },
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
  })
;  
};





