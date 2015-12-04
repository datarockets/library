Template.book.helpers({
    isOwner() {
        return Meteor.userId() === this.ownerId;
    }
});

Template.book.events({
    "click .book__edit"() {
        Router.go("bookEdit", { _id: this._id });
    },
    "click .book__get"() {
        Meteor.call('getBook', this._id, (error, result) => {
            if (error) {
                Bert.alert(error.reason, 'danger', 'growl-top-right');
            }
        });
    }
});
