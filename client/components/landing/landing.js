Template.landing.helpers({
    isSignedIn:() => Meteor.user()
});

Template.landing.events({
    'click .landing__login.google.plus'() {
        Meteor.loginWithGoogle({ requestPermissions: ['email'] }, (error) => {
            if (error) {
                console.log(error.reason)
            } else {
                FlowRouter.go('books');
            }
        });
    },
    'click .landing__go-to-app'() {
        FlowRouter.go('books');
    }
});
