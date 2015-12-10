Template.addBook.helpers({
    userOptions() {
        let users = Meteor.users.find().fetch();
        let options = _(users).map((user, index) => {
            return { label: user.profile.name, value: user._id }
        });

        return options;
    }
});

AutoForm.hooks({
    addBookForm: {
        onSuccess() {
            FlowRouter.go("/books");
        },
    }
});
