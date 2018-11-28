Vue.component('friend-component',{
    props:["friend"],
    filters:{
        fullName(value){
            return `${value.first}, ${value.last}`;
        },
        ageInTwoYear(age){
            return age + 2;
        }
    },

    methods:{

        incrementAge(friend){
            friend.age = friend.age + 1;
        },
        decrementAge(friend){
            friend.age = friend.age - 1;
        }

    },

    template:`
            <div>
                <h2>{{friend | fullName}}</h2>
                <h2>{{ friend.age }}</h2>
                <button v-on:click="incrementAge(friend)" >
                Add +
                </button>
                <button v-on:click="decrementAge(friend)" >
                Subtract -
                </button>

                <input v-model="friend.first" /> 
                <input v-model="friend.last" />
            </div>
    `,

});