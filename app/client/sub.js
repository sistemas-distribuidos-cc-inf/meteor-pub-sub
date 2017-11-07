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
      subscription: {
        get() {
          dep.depend();
          return topic.subscription;
        },
      },
    });
  }
  function subscriptions_fn() {
    debugger
    _topics.forEach((t) => {
      if(t.active && !t.subscription) {
        // Tracker.autorun(() => {          
          Meteor.subscribe(t.name);
          t.subscription = true;
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

const sub = sub_fn();


Template.sub.helpers({
  subscriptions() {
    return [
      {
        time: new Date().getTime(),
        topic: 'soccer',
        sumary: 'Donec nunc purus, euismod et.'
      },
      {
        time: new Date().getTime(),
        topic: 'movies',
        sumary: 'Donec nunc purus, euismod et.'
      },
      {
        time: new Date().getTime(),
        topic: 'culinary',
        sumary: 'Donec nunc purus, euismod et.'
      },
      {
        time: new Date().getTime(),
        topic: 'policy',
        sumary: 'Donec nunc purus, euismod et.'
      },
    ]
  },
  topics() {
    return sub.topics;
  }
});

Template.sub.events({ 
  'click button': function(event, template) { 
    this.active = !this.active;
  } 
});
