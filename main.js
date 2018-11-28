




const app = new Vue({
    el:"#app",
    // data:{
    //     friends:[
    //         {
    //             first:"bobby",
    //             last:"lone",
    //             age: 25,
    //         },
    //         {
    //             first:"John",
    //             last:"lone",
    //             age: 28,
    //         }
    //     ],

    // },
    data:{
        friends:[],
    },
    mounted() {
        console.log("mounted!!0");

        fetch("http://rest.learncode.academy/api/vue-5/friends")
            .then(response => response.json())
            .then((data)=> {
                this.friends = data;

            });
    },

    template:`
        <div>
            <li v-for="friend in friends" >{{friend.last}}</li>
        </div>
    `,

    // computed:{
    //     bobbyFullName(){
    //         return `${this.bobby.first} ${this.bobby.last}`;
    //     },

    //     johnFullName(){
    //         return `${this.john.first} ${this.john.last}`;
    //     },

        
    // },

    


    // template:`
    // <div>
    //     <friend-component v-for="item in friends" v-bind:friend="item" /> 
        

    // </div>
    // `
    
});