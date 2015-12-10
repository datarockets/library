Meteor.publishComposite("books", {
    find() {
        return Books.find();
    },
    children: [
        {
            find(doc) {
                return Meteor.users.find(
                    {
                        $or: [
                            { _id: doc.ownerId },
                            { _id: doc.reader }
                        ]
                    },
                    {
                        fields: {
                            profile: 1
                        }
                    }
                );
            }
        }
    ]
});

Meteor.publish("userBooks", (userId) => Books.find({ ownerId: userId }));

Meteor.publish("book", (bookId) => Books.find({ _id: bookId }));
