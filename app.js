new Vue({
    el: "#app",
    data: {
        title: "Rafee",
        age: 26,
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Md Omar Faruk"
        }
    },
    methods: {
        greeting(){
            return this.title
        },
        
    }
})