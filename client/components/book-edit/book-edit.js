Template.editBook.helpers({
    userOptions() {
        let users = Meteor.users.find().fetch();
        let options = _(users).map((user, index) => {
            return { label: user.profile.name, value: user._id }
        });

        return options;
    },
});

AutoForm.hooks({
    editBookForm: {
        onSuccess() {
            FlowRouter.go("/books");
        }
    }
});
