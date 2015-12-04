if (Meteor.isServer) {
    Meteor.startup(() => {
        ServiceConfiguration.configurations.update(
            { "service": "google" },
            {
                $set: {
                    "clientId": Meteor.settings.google.clientId,
                    "secret": Meteor.settings.google.secret
                }
            },
            { upsert: true }
        );
    });

    Accounts.onCreateUser((options, user) => {
        user.profile = options.profile;
        user.profile.photo = user.services.google.picture;
        user.profile.email = user.services.google.email;

        return user;
    });
}
