Meteor.startup(function() {
    if (Books.find().count() === 0) {
        Books.insert({ name: "JavaScript. Шаблоны",
                       author: "Стоян Стефанов",
                       cover: "http://www.i-programmer.info/images/stories/BookReviews/jspatterns.jpg",
                       ownerId: "qkqs4bDqXTZQrcPNc",
                       reader: "qkqs4bDqXTZQrcPNc",
                       readers: []
        });

        Books.insert({ name: "JavaScript. Подробное руководство",
                       author: "Дэвид Флэнаган",
                       cover: "http://akamaicovers.oreilly.com/images/9780596517748/cat.gif",
                       ownerId: "qkqs4bDqXTZQrcPNc",
                       reader: "qkqs4bDqXTZQrcPNc",
                       readers: []
        });

        Books.insert({ name: "JavaScript. The Good Parts",
                       author: "Дуглас Крокфорд",
                       cover: "http://akamaicovers.oreilly.com/images/9780596805531/lrg.jpg",
                       ownerId: "qkqs4bDqXTZQrcPNc",
                       reader: "qkqs4bDqXTZQrcPNc",
                       readers: []
        });

        Books.insert({ name: "68 способов эффективного использования JS",
                       author: "Дэвид Херман",
                       cover: "http://bizlit.com.ua/image/cache/data/kniga-sila-javascript-68-sposobov-jeffektivnogo-ispolzovanija-js-600x800.jpg",
                       ownerId: "qkqs4bDqXTZQrcPNc",
                       reader: "qkqs4bDqXTZQrcPNc",
                       readers: []
        });
    }
});
