new Vue({
    el: "#app",
    data: {
        title: "Rafee",
        age: 26,
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Md Omar Faruk"
        },
        src: "https://picsum.photos/id/237/200/300",
        alt: "Dog Image"
    },
    methods: {
        greeting(){
            return this.title
        },

    }
})