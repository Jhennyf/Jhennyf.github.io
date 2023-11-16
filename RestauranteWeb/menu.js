
class MyMenu extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = `
            <style>
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
                .content {
                    width: 100vw;
                    height: 70px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: #1f1e1f;
                    position: fixed;
                    padding-left: 30rem;
                }

                .logo {
                    width: 70px;
                    height: auto;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }

                .logo h3 {
                    color: white;
                    font-size: 1.6rem;
                }

                .logo img {
                    width: 100%;
                    height: 100%;
                }

                .content .list-menu {
                    width: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .content .list-menu li a {
                    padding: 3rem 1rem 2rem 1rem;
                    color: white;
                    font-size: 1.8rem;
                    text-transform: uppercase;
                    font-weight: 500;
                    transition: all 200ms ease-in;
                }

                .content .list-menu li a:hover {
                    background-color: #3333;
                    border-bottom: 4px solid #ffc506;
                    color: #ffc506;
                }
            </style> 

            <slot>
            <header class="content">
            <div class="logo">
                <img src="imagens/logos/logoHambuguer.png" alt="">
                <h3>BurguerUAI</h3>
            </div>
            <nav>
                <ul class="list-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#sobrenos">Sobre Nós</a></li>
                    <li><a href="#cardapio">Cardápio</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                    <li><a href="https://www.instagram.com/burgeruai/"><i class="bi bi-instagram"></i></a></i></li>
                    <li><a href="https://www.facebook.com/uaiburguer.br/"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i class="bi bi-cart-dash"></i></a></li>
                </ul>
            </nav>
    
            <div class="menu-toggle">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
        </header>
            </slot>
            
        `;

        this.shadow.innerHTML = template;
    }
}

customElements.define('my-menu', MyMenu);
