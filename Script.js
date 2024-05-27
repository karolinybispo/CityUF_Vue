const app = Vue.creatApp({

    data() {
        return {
            message: 'Cadastro',
            cadastro:[],
                estado: {
                    nomeestado: null,
                        },
                cidade: {
                  nomecidade: null,  
                        },
                bairro: {
                   nomebairro: null,
                   rua: null,
                   numero: null,
                },

        }

    },

    methods:{
        addEstado(){
            if(this.estado.nomeestado){
            // Crie um novo objeto representando o estado a ser adicionado
            const novoEstado = {
                id: this.cadastro.length + 1, // Atribua um ID único ao estado
                nome: this.estado.nomeestado // Supondo que você tenha uma variável nomeEstado vinculada ao campo de entrada
            };
        
            // Adicione o novo estado ao array de agendamentos
            this.cadastro.push(novoEstado);

            // Limpe o campo de entrada
            this.estado.nomeestado = '';
            this.message = 'Estados';

        }
    },
        removeEstado(item) {
            const indexEstado = this.cadastro.indexOf(item);
            if (indexEstado !== -1) {
                this.cadastro.splice(indexEstado, 1);
                localStorage.setItem('estado', JSON.stringify(this.cadastro));
        } },
        
       
            editEstado(item) {
                this.indexEstado = this.cadastro.indexOf(item);
                this.cadastro[this.indexEstado] = Object.assign({}, this.estado); // Atualiza o estado no array de cadastro
                localStorage.setItem('cadastro', JSON.stringify(this.cadastro)); // Atualiza os dados no armazenamento local, se necessário
            }
            
        },
    }
).mount('#divPrincipal');