new Vue({
    el: "#app",
    data: {
        // title: "Rafee",
        // // age: 26,
        // isItTrue: true,
        // cars: ['Ford', 'Toyota'],
        // robot: {
        //     name: "Md Omar Faruk",
        //     age: 15,
        //     allowAge: 18
        // },
        // src: "https://picsum.photos/id/237/200/300",
        // alt: "Dog Image",
        // link: "https://www.google.com",
        // myText: "Hello World",
        // myHtml: "<strong>Hello World</strong>",
        // name: "Md Omar Faruk",
        // age: 15,
        // allowAge: 18,
        // cars: ['Ford', 'Toyota', 'Honda'],
        // x: 0,
        // y: 0,
        // formData: {
        //     firstName: "",
        //     lastName: ""
        // },

        // a: 0,
        // b: 0,
        // salary: 10,

    },
    methods: {
        // greeting(){
        //     return this.title
        // },
        // changeUser(){
        //     this.name = "Rafee" ? true : false
        // },

        // update() {
        //     setTimeout(() => {
        //         this.name = "Rafee"
        //     }, 2000)
        // },

        // updateName(newName){
        //     this.name = newName
        //     console.log(event)
        // },

        // getCoord(event){
        //     this.x = event.clientX
        //     this.y = event.clientY
        // },

        // handelFrom() {
        //     console.log(this.formData)
        // }
    },

    computed: {
        // addToA(){
        //     console.log('addToA')
        //     return this.a + this.salary
        // },

        // addToB(){
        //     console.log('addToB')
        //     return this.b + this.salary
        // }
    }
})

const app1 = new Vue({
    el: "#app1",
    data: {
        value: "1st"
    },
    methods: {
        changeValue(){
            app2.value = "changed"
        }
    }
})
const app2 = new Vue({
    el: "#app2",
    data: {
        value: "2nd"
    }
})