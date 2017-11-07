Meteor.methods({
  Soccer() {
    const obj = {
      time: Date(),
      topic: 'Soccer',
      sumary: Fake.sentence()      
    };
    return Soccer.insert(obj);
  },
  Culinary() {
    const obj = {
      time: Date(),
      topic: 'Culinary',
      sumary: Fake.sentence()      
    };
    return Culinary.insert(obj);
  },
  Movies() {
    const obj = {
      time: Date(),
      topic: 'Movies',
      sumary: Fake.sentence()      
    };
    return Movies.insert(obj);
  },
  Policy() {
    const obj = {
      time: Date(),
      topic: 'Policy',
      sumary: Fake.sentence()      
    };
    return Policy.insert(obj);
  },
});