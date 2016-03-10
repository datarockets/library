Meteor.methods({
    "getBook"(bookId) {
        Books.update({ _id: bookId }, { $set: { reader: Meteor.userId() } });
    },
    "finishBook"(bookId) {
        Books.update({ _id: bookId }, { $set: { reader: '' } });
    },
    "requestBook"(bookId) {
        console.log(bookId);
        let getUser = userId => Meteor.users.findOne({ _id: userId });

        let book = Books.findOne({ _id: bookId });
        let reader = getUser(book.reader);
        let user = getUser(Meteor.userId());

        this.unblock();

        Mandrill.messages.sendTemplate({
            template_name: 'book-request',
            template_content: [
              {
                  name: 'body',
                  content: 'Breaking news! Federal Agents Raid Gun Shop, Find Weapons'
              }
            ],
            message: {
                subject: 'Datarockets library [book requests]',
                from_email: user.profile.email,
                to: [
                    { email: reader.profile.email }
                ],
                // global merge variable in the *|VARIABLE|* format
                global_merge_vars: [
                    {
                        user: reader.name,
                        userName: user.profile.name,
                        bookName: book.name
                    }
                ]
            }
        });
    }
});
