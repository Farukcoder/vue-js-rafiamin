new Vue({
    el: "#app",
    data: {
        title: "Rafee",
        // age: 26,
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Md Omar Faruk",
            age: 15,
            allowAge: 18
        },
        src: "https://picsum.photos/id/237/200/300",
        alt: "Dog Image",
        link: "https://www.google.com",
        myText: "Hello World",
        myHtml: "<strong>Hello World</strong>",
        name: "Md Omar Faruk",
        age: 15,
        allowAge: 18,
        cars: ['Ford', 'Toyota', 'Honda'],
    },
    methods: {
        greeting(){
            return this.title
        },
        changeUser(){
            this.name = "Rafee" ? true : false
        },

        update() {
            setTimeout(() => {
                this.name = "Rafee"
            }, 2000)
        },

    }
})