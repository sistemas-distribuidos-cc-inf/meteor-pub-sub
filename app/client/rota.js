Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.layout('ApplicationLayout');  
  this.layout('main');
});
Router.route('/pub', function () {
  this.layout('ApplicationLayout');  
  this.layout('pub');
});
Router.route('/sub', function () {
  this.layout('ApplicationLayout');  
  this.layout('sub');
});