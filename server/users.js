Meteor.publish("usersData", () => Meteor.users.find({}, { fields: { profile: 1 } }));
