FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('landing');
    }
});

FlowRouter.route('/books', {
    name: 'books',
    action() {
        BlazeLayout.render('mainLayout', { content: 'books' });
    }
});

FlowRouter.route("/book/add", {
    name: "addBook",
    action() {
        BlazeLayout.render('mainLayout', { content: 'addBook' });
    }
});
