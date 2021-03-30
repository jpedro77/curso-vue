new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta () {
            alert('Alerta!!!')
        },
        alteraValor (event) {
            this.valor = event.target.value
        }
    }
})