
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

                
@media(max-width: 768px) {
    @media (max-width: 1200px) {
        .content {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 12%;
            padding-left: 0px;
        }
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 40px;
    }

    .content .list-menu {
        display: none;
    }

    .one,
    .two,
    .three {
        width: 80%;
        height: 2px;
        background-color: white;
        margin: 6px auto;
        transition-duration: 0.5s;
    }

    .menu-toggle {
        width: 30px;
        height: 30px;
    }

    .content.on {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(30, 31, 30, 0.8);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content.on .logo {
        display: none;
    }

    .content.on .menu-toggle {
        position: absolute;
        right: 40px;
        top: 20px;
    }

    .content.on .list-menu {
        display: block;
    }

    .content.on .list-menu li {
        display: flex;
        justify-content: center;
    }

    .content.on .list-menu li a {
        font-size: 2rem;
    }

    .content.on .menu-toggle .two {
        opacity: 0;
    }

    .content.on .menu-toggle .one {
        transform: rotate(45deg) translate(5px, -8px);
    }

    .content.on .menu-toggle .three {
        transform: rotate(-45deg) translate(20px, -6px);
    }


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
