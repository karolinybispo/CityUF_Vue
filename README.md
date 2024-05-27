# CityUF_Vue

**Navbar:** barra de navegacao.

**<button class="navbar-toggler"** controla como os conteudos de navegacao ficam em telas pequenas ou grandes

**type="button"**: defini que o tipo de botao eh botao e isso faz ele nao enviar nada

**data-bs-target="#navbarPrincipal"**: diz ao botão qual elemento (parte da página) ele deve mostrar ou esconder quando clicado. Neste caso, o valor #navbarPrincipal refere-se ao elemento com o id navbarPrincipal. 


# LINKS DA PRIMEIRA VERSAO:
Esses links nao estavam deixando o navbar como esta na versao final

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cdbootstrap/css/cdb.min.css" />

   

     <!--  importa a biblioteca Popper.js -->
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>

    <!-- IMPORTA BOOTSTRAP -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script> 
     

# ELEMENTOS DO NAVBAR 
LINHAS 42-57
- "li": define um item de lista

- "ul": lista nao ordenada

1 - **< div class="collapse navbar-collapse" id="navbarPrincipal">**
     **ul class="navbar-nav me-auto mb-2 mb-lg-0">**
 - "div": agrupa elementos e aplica-os estilos ou scripts.
 
 - esse -div- especificamente contem os elementos da barra de navegacao.
 - "class" atributo usado pelo CSS ou js.
 - "collapse" e "navbar-collapse" sao classes CSS. Elas vem do fremework bootstrap que ja os estiliza.

 - "collapse" especifica q esse elemento pode colapsar (fechar em telas menores)
 - navbar-collapse: aplica estilos especificos para a barra de navegaca que pode colapsar.

 - "id" atributo q fornece um identificador unico para o elemento HTML.

 - "navbarPrincipal" nome q pode ser referienciado pelo CSS ou JS.

2 - **ul class="navbar-nav me-auto mb-2 mb-lg-0">**

- me-auto: Em bootstrap sgf: me (margin-end). auto:  ajusta automaticamente a margem final dos itens da lista para ocupar o espaço disponível (isso pode ajudar a alinhar itens).

- mb-2: mb significa "margin-bottom" (margem inferior) e 2 é a quantidade de margem inferior aplicada (baseado na escala de margem do Bootstrap).

- mb-lg-0: Define a margem inferior como 0 em larguras de tela grandes (lg = large)


**< li class="nav-item" > :  aplica a classe do bootstrap "nav-item" ao item de lista, estilizando-o como item de navegacao**


3 -  **< a v-on:click="message = 'Estados'" class="nav-link" aria-current="page" href="#">Estados </ a>**                    

- "v-on" diretiva que escuta eventos no dom, nesse caso foi definido o evento click. Foi colocado pois deseja-se responder a esse click do user
- "a": tag que define link

- v-on = @

- v-on:click: define um evento de clique. Quando o elemento for clicado, é executado a expressao: "message = 'Estados' "

- **aria-current="page"**: atributo ARIA indica qual item do navbar é a página atual ou a que o usario esta.  

- " href="#" ": define o destino do link. O # indica que a pg nao ira para uma nova pagina, mas pode ser usado com JavaScript para criar comportamentos personalizados.

- < li class="nav-item": "nav-item" aplicara estilos especificos, espacamento, alinhamento e outros. A classe "nav-item" aplica a estilizacao do bootstrap ao item presente na lista "li". Remover a classe tira comportamento e estilo fornecido pelo bootstrap. Ainda sera um item de navegacao, se tirado, mas sem estilo.

4 -  **< input type="text" class="form-control" id="estado" v-model="agendamento.data">**
- type="text": define o tipo de campo de entrada.

- class="form-control": Aplica os estilos do Bootstrap ao campo de entrada, garantindo que ele tenha uma aparência consistente com outros elementos de formulário

- id do **input** e for do **label** devem ser os mesmos.

- id=estado: define um identificador para o campo de entrada

- 

## Vue.js
- um framework JavaScript para construir interfaces de usuário. Ele é usado para adicionar ouvintes de eventos (event listeners) a elementos HTML. 

- v-show do Vue.js é usada para condicionalmente mostrar ou esconder um elemento HTML com base no valor de uma expressão. Nesse exemplo,  **< div v-show="message == 'Agendamentos'">** , a div so aparece se agendamentos for true. "v-show": Controla a visibilidade do elemento através do CSS (display). O formulário de agendamentos é exibido apenas quando message é 'Agendamentos'.

- v-model: cria uma ligacao de dados bidirecional entre um elemento de formulario (ex input) e uma variavel no arqui q esta o Vue. Qualquer mudanca feita no formulario, reflete na variavel do Vue.
