Template.main.events({ 
  'click .pub': function(event, template) { 
    Router.go('/pub');    
  },
  'click .sub': function(event, template) { 
    Router.go('/sub');    
  },
});