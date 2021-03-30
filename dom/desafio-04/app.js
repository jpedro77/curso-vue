new Vue({
	el: '#desafio',
	data: {
		alterarClass: 'destaque',
		classInfo: '',
		classInfo2: '',
		c4: true,
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.alterarClass = this.alterarClass == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);
		},
		setClass(event) {
			if(event.target.value == "true"){
				this.c4 = true
			}else if(event.target.value == "false"){
				this.c4 = false
			}
		}
	}
})
