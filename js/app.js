let salut = function (el, binding) {
    el.value = binding.value
    console.log('bind')
}

let vm = new Vue({
    el: '#app',
    directives: {
        salut
    },
    data: {
        message: 'Jean',
    },  
    methods: {
        demo: function () {
            console.log('Salut')
        },
        demo2: function () {
            console.log('Salut2')
        }
    }
})