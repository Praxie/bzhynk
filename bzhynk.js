Bzhynky = new Mongo.Collection('bzhynky');

if (Meteor.isClient) {
  Session.setDefault("counter", 0);
  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      $('body').addClass('bzhynk');
      setTimeout(function() {
        $('body').removeClass('bzhynk');
      }, 500);
      Session.set("counter", Session.get("counter") + 1);
      Bzhynky.insert({createdAt: Date.now()});
    }
  });
}

if (Meteor.isCordova) {
  Bzhynky.find().observe({
    added: function() {
      // Do some БЖИНЬКs
      $('body').addClass('bzhynk');
      setTimeout(function() {
        $('body').removeClass('bzhynk');
      }, 500);
      navigator.vibrate(500);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
