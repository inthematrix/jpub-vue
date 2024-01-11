var app = new Vue({
    el: '#app',
    data: {
        message: {
            value: 'Hello Vue.js!'
        },
        list: ['사과', '배', '딸기'],
        show: true,
        num: 1,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        radius: 50,
        monsters:[
            // {id: 1, name: '슬라임', hp: 100},
            // {id: 2, name: '고블린', hp: 200},
            // {id: 3, name: '드래곤', hp: 500}
        ]

    },
    methods: {
        handleClick: function (event) {
            alert(event.target) // [object HTMLButtonElement]
        },
        increment: function() {
            this.count += 1
        },
        doAdd: function () {
            let max = this.monsters.reduce(function (a,b) {
                return a > b.id ? a : b.id
            }, 0)

            this.monsters.push({
                    id: max+1,
                    name : this.name,
                    hp: 500
            })
        },
        doRemove: function (index) {
            this.monsters.splice(index, 1)
        },
        doAttack: function (index) {
            this.monsters[index].hp -= 10
        }
    },
    created: function () {
        axios.get('list.json').then(function (response) {
            this.monsters = response.data
        }.bind(this)).catch(function (e) {
            console.error(e)
        })
    }
})