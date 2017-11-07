Template.pub.events({ 
  'click .Movies': function(event, template) { 
     Meteor.call('Movies', function(error, success) { 
       if (error) { 
         console.log('error', error); 
       }
       if(success) {
         alert("Inserted successfully")
       }
     });
  },
  'click .Soccer': function(event, template) { 
     Meteor.call('Soccer', function(error, success) { 
       if (error) { 
         console.log('error', error); 
       } 
       if(success) {
         alert("Inserted successfully")
       }
      });
    },
    'click .Culinary': function(event, template) { 
      Meteor.call('Culinary', function(error, success) { 
        if (error) { 
          console.log('error', error); 
        }
        if(success) {
          alert("Inserted successfully")
        }
      });
    },
    'click .Policy': function(event, template) { 
      Meteor.call('Policy', function(error, success) { 
        if (error) { 
          console.log('error', error); 
        }
        if(success) {
          alert("Inserted successfully")
        }
     });
  },
});