Meteor.methods({
    "getBook"(bookId) {
        Books.update({ _id: bookId }, { $set: { reader: Meteor.userId() } });
    },
    "finishBook"(bookId) {
        Books.update({ _id: bookId }, { $set: { reader: '' } });
    }
});
