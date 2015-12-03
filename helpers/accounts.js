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
}
