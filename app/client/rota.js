Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.layout('main');
});
Router.route('/pub', function () {
  this.layout('pub');
});
Router.route('/sub', function () {
  this.layout('sub');
});