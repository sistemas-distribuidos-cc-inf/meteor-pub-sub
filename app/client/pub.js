Template.pub.events({
  'click .Movies': function (event, template) {
    const author = document.querySelector('input').value;
    if(!author) return alert('enter the name of the author');
    Meteor.call('Movies', author, function (error, success) {
      if (error) {
        console.log('error', error);
      }
      if (success) {
        alert("Inserted successfully")
      }
    });
  },
  'click .Soccer': function (event, template) {
    const author = document.querySelector('input').value;
    if(!author) return alert('enter the name of the author');
    Meteor.call('Soccer', author, function (error, success) {
      if (error) {
        console.log('error', error);
      }
      if (success) {
        alert("Inserted successfully")
      }
    });
  },
  'click .Culinary': function (event, template) {
    const author = document.querySelector('input').value;
    if(!author) return alert('enter the name of the author');
    Meteor.call('Culinary', author, function (error, success) {
      if (error) {
        console.log('error', error);
      }
      if (success) {
        alert("Inserted successfully")
      }
    });
  },
  'click .Policy': function (event, template) {
    const author = document.querySelector('input').value;
    if(!author) return alert('enter the name of the author').
    Meteor.call('Policy', author, function (error, success) {
      if (error) {
        console.log('error', error);
      }
      if (success) {
        alert("Inserted successfully")
      }
    });
  },
});