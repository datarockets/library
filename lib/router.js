FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('landing');
    }
})

FlowRouter.route('/books', {
    name: 'books',
    action() {
        BlazeLayout.render('mainLayout');
    }
})
