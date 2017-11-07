const sub_fn = function () {
  const dep = new Tracker.Dependency;
  const _topics = [];
  const subscriptions = {};
  const self = {
    init() {
      defineTopics();
    }
  };
  function defineTopics() {
    const topic = [
      {
        disabled: '',
        name: 'Soccer',
        active: '',
      },
      {
        disabled: '',
        name: 'Movies',
        active: '',
      },
      {
        disabled: '',
        name: 'Culinary',
        active: '',
      },
      {
        disabled: '',
        name: 'Policy',
        active: '',
      },
    ];
    topic.forEach(t => _topics.push(rxTopic(t)));
  }
  function rxTopic(topic) {
    return Object.defineProperties({}, {
      data: {
        get() {
          debugger
          dep.depend();
          if (topic.name === 'Soccer') {
            return Soccer.find().fetch()
          } else if (topic.name === 'Policy') {
            return Policy.find().fetch();
          } else if (topic.name === 'Culinary') {
            return Culinary.find().fetch();
          } else if (topic.name === 'Movies') {
            return Movies.find().fetch();
          }
        }
      },
      name: {
        get() {
          dep.depend();
          return topic.name;
        }
      },
      active: {
        get() {
          dep.depend();
          return topic.active;
        },
        set(value) {
          topic.active = value;
          subscriptions_fn();
          dep.changed();
        }
      },
      disabled: {
        get() {
          dep.depend();
          if (topic.active)
            return 'disabled';
        },
      },
    });
  }
  function subscriptions_fn() {
    _topics.forEach((t) => {
      if (t.active && !t.subscription_done) {
        // Tracker.autorun(() => {          
        Meteor.subscribe(t.name);
        t.subscription_done = true;
        // });
      }
    });
  }
  function definePropreties() {
    return Object.defineProperties(self, {
      topics: {
        get() {
          dep.depend();
          return _topics;
        },
      }
    });
  }
  definePropreties();
  self.init();
  return self;
}

let sub;

Template.sub.onCreated(function () {
  sub = sub_fn();
});
Template.sub.helpers({
  topics() {
    return sub.topics;
  },
  subscription() {
    return this.data;
  }
});

Template.sub.events({
  'click button': function (event, template) {
    this.active = !this.active;
  }
});
