import Vue from 'vue'
//a partir de uma nova instância, faço a comunicação entre componentes
export default new Vue( {
    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})


