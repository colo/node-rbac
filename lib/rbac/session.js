var Session = new Class({
  Implements: [Options, Events],
  
  ADD_ROLE: 'addRole',
  
  $subject: null,
  $role: null,
  
  options: {
	name: null,
  },

  initialize: function(options){
	this.setOptions(options);
  },
  setSubject:function (subject){
	if(this.getRole() === null){
		throw new Error('Can\'t add Subject if there is no Role set.');
	}
	else if(Object.contains(this.getRole().getSubjects(),subject) === false){
		throw new Error('Can\'t add Subject that doesn\'t belong to current Role');
	}

	this.$subject = subject;
  },
  getSubject: function(){
	return this.$subject;
  },
  setRole: function(role){
	role.addEvent(role.DELETE_SUBJECT, function(subject){
	  if(subject === this.subject) throw new Error('Deleting a Subject on a created Session is not allowed');
	}.bind(this));
	
	this.fireEvent(this.ADD_ROLE, role);
	
	this.$role = role;
  },
  getRole:function(){
	return this.$role;
  },

});


exports.Session = Session;