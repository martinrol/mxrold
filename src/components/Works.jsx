import React from 'react'
import Button from './Button'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/Works.css'

const Works = () => {
  const textMessage = 'Ver mas'
  const rute = '/proyectos/listado'
  const IMAGE_EXAMPLE = 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'

  return (
    <section className="Works">
      <div className="Works__title">
        <h2>Proyectos destacados</h2>
      </div>
      <div className="Works__item">
        <div className="Works__item--image">
          <figure>
            <a href="#">
              <img src={IMAGE_EXAMPLE} alt=""/>
            </a>
          </figure>
        </div>
        <div className="Works__item--info">
          <h3>Título</h3>
          <h4>Caracteristicas</h4>
          <div className="Works__item--info-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui fuga adipisci necessitatibus quae eos optio atque quibusdam maxime.</p>
            <div className="Works__item--info-box-tools">
              <ul>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
              </ul>
            </div>
            <div className="Works__item--info-box-links">
              <a href="#">
                <AiFillGithub size="22px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="22px"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Works__item">
        <div className="Works__item--image">
          <figure>
            <a href="#">
              <img src={IMAGE_EXAMPLE} alt=""/>
            </a>
          </figure>
        </div>
        <div className="Works__item--info">
          <h3>Título</h3>
          <h4>Caracteristicas</h4>
          <div className="Works__item--info-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui fuga adipisci necessitatibus quae eos optio atque quibusdam maxime.</p>
            <div className="Works__item--info-box-tools">
              <ul>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
              </ul>
            </div>
            <div className="Works__item--info-box-links">
              <a href="#">
                <AiFillGithub size="22px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="22px"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Works__item">
        <div className="Works__item--image">
          <figure>
            <a href="#">
              <img src={IMAGE_EXAMPLE} alt=""/>
            </a>
          </figure>
        </div>
        <div className="Works__item--info">
          <h3>Título</h3>
          <h4>Caracteristicas</h4>
          <div className="Works__item--info-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui fuga adipisci necessitatibus quae eos optio atque quibusdam maxime.</p>
            <div className="Works__item--info-box-tools">
              <ul>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
                <li>Example</li>
              </ul>
            </div>
            <div className="Works__item--info-box-links">
              <a href="#">
                <AiFillGithub size="22px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="22px"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Works__subtitle">
        <h2>Lista de proyectos</h2>
      </div>
      <div className="Works__projects">
        <article className="Works__projects--item">
          <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              01
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>

        <article className="Works__projects--item">
        <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              02
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>

        <article className="Works__projects--item">
        <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              03
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>

        <article className="Works__projects--item">
          <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              04
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>

        <article className="Works__projects--item">
        <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              05
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>

        <article className="Works__projects--item">
        <div className="Works__projects--item-number">
            <div className="Works__projects--item-number-circle">
              06
            </div>
          </div>
          <div className="Works__projects--item-title">
            <h3>Título</h3>
          </div>
          <div className="Works__projects--item-tools">
            <p>Example - Example - Example</p>
          </div>
          <div className="Works__projects--item-links">
              <a href="#">
                <AiFillGithub size="28px"/>
              </a>
              <span></span>
              <a href="#">
                <BiWorld size="28px"/>
              </a>
          </div>
        </article>
      </div>
      <div className="Works__list">
        <Button text={textMessage} rute={rute}/>
      </div>
    </section>
  )
}

export default Works
