var subs = new SubsManager();

FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('landing');
    }
});

FlowRouter.route('/books', {
    name: 'books',
    subscriptions() {
        this.register('books', Meteor.subscribe('books'));
    },
    action() {
        BlazeLayout.render('mainLayout', { content: 'books' });
    }
});

FlowRouter.route("/book/add", {
    name: "addBook",
    subscriptions() {
        this.register('usersData', Meteor.subscribe('usersData', Meteor.userId()));
    },
    action() {
        BlazeLayout.render('mainLayout', { content: 'addBook' });
    }
});

FlowRouter.route("/book/:_id/edit", {
    name: "editBook",
    subscriptions(params, queryParams) {
        this.register('usersData', Meteor.subscribe('usersData', Meteor.userId()));
        this.register('book', Meteor.subscribe('book', params._id));
    },
    action() {
        BlazeLayout.render('mainLayout', { content: 'editBook' });
    }
});
