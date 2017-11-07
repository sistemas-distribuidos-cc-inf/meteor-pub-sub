Meteor.startup(() => {
  Soccer = new Mongo.Collection('soccer');
  Movies = new Mongo.Collection('movies');
  Culinary = new Mongo.Collection('culinary');
  Policy = new Mongo.Collection('policy');
});

