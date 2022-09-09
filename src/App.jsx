import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './assets/global.css';


function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);


  return (
    <>
{/* 1. Esta sessão deverá ser apresentada sempre que 
houver o click no botão MENU:*/}

      <div class="l-app">
      
      <button class="l-sidebar__btn" type="button">
        <FaBars className='l-sidebar_icon' onClick={toggleSidebar}/>
      </button>

      <div class={sidebar ? 'l-sidebar l-sidebar--open' : 'l-sidebar l-sidebar--close'}  onclick={toggleSidebar}>
      
      <button className='l-sidebar__btn' type="button">
      </button> <AiOutlineClose className='l-sidebar_icon' onClick={toggleSidebar} />
      

      <h1 class="l-logo" >Em que posso ajudar?</h1>
      <nav class="c-sidebar">
      <a class="c-nav__item" href="#home">
      <AiOutlineHome /> Home</a>
      <a class="c-nav__item" href="#sobre-mim">
      <BsFillPersonFill /> Sobre mim</a>
      <a class="c-nav__item" href="#contatos">
      <AiOutlineContacts />  Contatos</a>
      </nav>
      </div>



{/*1.1. Quando houver o click do usuário,
a sidebar deverá ser apresentada.*/}

        <div class="l-sidebar">
          ...
        </div>




{/* 2. O usuário poderá usar o teclado para abrir ou fechar
a sidebar. No caso, as tecla Space.

3. O usuário poderá usar o mouse para abrir ou fechar
a sidebar. No caso, um duplo click em qualquer local
do site irá abrir ou fechar a sidebar.*/}



        <div class="l-content">

          {/*<!-- Sessão Principal -->*/}
          <div class="l-page bg__profile">
            <main>

              <h1 class="title" id="home">Olá, me chamo Jailson Junior!</h1>
              <p class="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav class="c-nav u-my-3">
                <a class="c-nav__item" href="https://github.com/JaiJuni0r">
                  <BsGithub /> Github</a>
                <a class="c-nav__item" href="https://www.linkedin.com/in/jailson-junior-847a10215/">
                  <BsLinkedin /> Linkedin</a>

              </nav>

                <a class="c-btn u-my-3" href="#sobre-mim">
                  Sobre mim <BsFillPersonFill /> </a> 

            </main>
          </div>

          {/*<!-- Sessão Sobre mim -->*/}
          <div class="l-page" id="sobre-mim">
            <article>
              <h1 class="title">Sobre mim</h1>
              <p>Atualmente, estudando desenvolvimento Web Full Stack pela Digital House</p>
              <p>Amo coxinha com guaraná antartica</p>
              <p>E, até que sei cozinhar bem! </p>
            </article>
          </div>

          {/*<!-- Sessão Contatos-->*/}
          <div class="l-page" id="contatos">
            <section>
              <h1 class="title">Posso te ajudar?</h1>

              <nav class="c-nav">
                <a class="c-nav__item" href="">Github</a>
                <a class="c-nav__item" href="">Linkedin</a>
                <a class="c-nav__item" href="tel:+557198234-7330">Telefone</a>
              </nav>

              <form
                name="contact"
                class="c-form"
              >
                <div class="c-form__group">
                  <label for="name" class="c-form__label">Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" class="c-form__control"/>
                </div>
                <div class="c-form__group">
                  <label for="email" class="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" id="email" class="c-form__control"/>
                </div>
                <div class="c-form__group">
                  <label for="subject" class="c-form__label">Assunto</label>
                  <select id="subject" class="c-form__control">
                    <option selected disabled>Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div class="c-form__group">
                  <label for="messager" class="c-form__label">Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" class="c-form__control"></textarea>
                </div>
                <div class="c-form__group">
                  <button class="c-btn" type="submit">Enviar</button>
                </div>
              </form>
            </section>

            <footer class="u-my-3">
              <span>Todos os direitos reservados Jailson Junior.</span>
            </footer>

          </div>

        </div>
      </div>
    </>
  )
}

export default App

