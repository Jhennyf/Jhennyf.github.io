
class MyMenu extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = `

            <style>

            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@100;200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bungee&family=Inter:wght@100;200;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bungee&family=Inter:wght@100;200;400&family=Rye&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.15.0/font/bootstrap-icons.css');

            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            border: none;
            text-decoration: none;
            font-family: 'Bebas Neue', sans-serif;
            font-family: 'Inter', sans-serif;
        }
        
        html {
            width: 100vw;
            height: 100vh;
            font-size: 62.5%;
            overflow-x: hidden;
            background-color: #1f1e1f;
        }
        
        .nav {
            position: fixed;
            align-items: center;
            padding-left: 20rem;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            height: 70px;
            background-color: #1f1e1f;
            padding-rigth: 50px;
        }
        
        .nav__toggle {
          position: fixed;
            cursor: pointer;
            margin: 0rem 1rem;
            right: 0;
        }
        
        .close,
        input[type="checkbox"] {
            display: none;
        }
        
        .hamburger {
            margin-top: 0.2rem;
        }
        
        .nav__menu {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            margin: 1rem;
            padding-right: 40px;
            
        }
  
        li {
            list-style: none;
            display: none;
            text-transform: uppercase;

        }
        
        li:first-child {
            margin-right: auto;
            display: block;
        }
        
        .nav__menu a {
            text-decoration: none;
            color: initial;
            font-size: 2rem;
            color: rgb(255, 255, 255);
        }
        
        #item-menu:hover {
            color: #ffc506;
        }
        
        #nav__checkbox:checked~ul.nav__menu li {
            display: block;
        }
        
        #nav__checkbox:checked~label.nav__toggle .hamburger {
            display: none;
        }
        
        #nav__checkbox:checked~label.nav__toggle .close {
            display: block;
        }
        
        @media only screen and (min-width: 1200px) {
          .main{
            display:block;
          }
          html {
            font-size: 45%;
        }
        
            .nav__toggle {
                display: none;
            }
        
            .nav__menu {
                flex-direction: row;
            }
        
            .nav__menu li {
                display: block;
            }
        
            .menu-item {
                padding-right: 50px;
            }
        
            .imglogo {
                height: unset;
                height: 100px;
            }
        
            .imglogo {
                height: 52px;
            }
        }
        
        @media only screen and (max-width: 1080px) {
          .main{
            display:block;
          }
          .nav__menu{
            background-color:  #1f1e1f;;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
          }
            .nav__menu a {
                font-size: 2rem;
                color: rgb(255, 255, 255);
            }
        
            .imglogo {
                height: 50px;
                padding-left: 0px;
                position: fixed;
                top: 0;
                left: 0;
            }
        
            .hamburger,
            .close {
                height: 30px;
            }
        }
            </style> 

            <slot>
            <nav class="nav">
            <input type="checkbox" id="nav__checkbox" class="nav__checkbox">
            <label for="nav__checkbox" class="nav__toggle">
              <img src="imagens/logos/1.png" class="hamburger" />
              <img src="imagens/logos/2.png" class="close" />
            </label>
        
            <ul class="nav__menu">
        
              <li>
                <a href="index.html">
                  <img class="imglogo" src="imagens/logos/Logomarca.png" /> </a>
              </li>
        
              <li><a href="index.html">Home</a></li>
              <li><a href="#sobrenos">Sobre Nós</a></li>
              <li><a href="cardapio.html">Cardápio</a></li>
              <li><a href="contato.html">Contatos</a></li>
              <li><a href="formulario.html">feedback</a></li>
            </ul>
          </nav>
 </slot>
            
 <script src="script.js"></script>
            
        `;

        this.shadow.innerHTML = template;
    }
}

customElements.define('my-menu', MyMenu);

           
