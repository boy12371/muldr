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


