Meteor.methods({
  Soccer(author) {
    const obj = {
      time: Date(),
      author,
      topic: 'Soccer',
      sumary: Fake.sentence()      
    };
    return Soccer.insert(obj);
  },
  Culinary(author) {
    const obj = {
      time: Date(),
      author,
      topic: 'Culinary',
      sumary: Fake.sentence()      
    };
    return Culinary.insert(obj);
  },
  Movies(author) {
    const obj = {
      author,
      time: Date(),
      topic: 'Movies',
      sumary: Fake.sentence()      
    };
    return Movies.insert(obj);
  },
  Policy() {
    const obj = {
      author,
      time: Date(),
      topic: 'Policy',
      sumary: Fake.sentence()      
    };
    return Policy.insert(obj);
  },
});