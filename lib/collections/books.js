Schemas.Books = new SimpleSchema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    cover: {
        type: String
    },
    ownerId: {
        type: String,
        autoform: {
            type: "select"
        }
    },
    reader: {
        type: String,
        defaultValue: "",
        optional: true
    },
    readers: {
        type: [String],
        optional: true,
        defaultValue: []
    }
});

Books = Collections.Books = new Mongo.Collection("books");

Books.helpers({
    readerData() {
        return Meteor.users.findOne(this.reader);
    },
    ownerData() {
        return Meteor.users.findOne(this.ownerId);
    }
});

Books.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});

Books.attachSchema(Schemas.Books);
