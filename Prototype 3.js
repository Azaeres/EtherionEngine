if (Meteor.isClient) {
  Template.etherionengine.greeting = function () {
    return "Welcome to Prototype 3.";
  };

  Template.etherionengine.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
