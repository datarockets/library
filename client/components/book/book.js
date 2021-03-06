Template.book.helpers({
    isOwner() {
        return Meteor.userId() === this.ownerId;
    },
    isReader() {
        return Meteor.userId() === this.reader;
    },
    mayRequest() {
        return Meteor.userId() !== this.reader && this.reader;
    }
});

Template.book.events({
    "click .book__edit"() {
        FlowRouter.go("/book/:_id/edit", { _id: this._id });
    },
    "click .book__get"() {
        Meteor.call('getBook', this._id, (error, result) => {
            if (error) {
                // Bert.alert(error.reason, 'danger', 'growl-top-right');
            }
        });
    },
    "click .book__finish"() {
        Meteor.call('finishBook', this._id, (error, result) => {
            if (error) {

            }
        });
    },
    "click .book__request"() {
        Meteor.call("requestBook", this._id, (error, result) => {
            if (error) {

            }
        });
    }
});
