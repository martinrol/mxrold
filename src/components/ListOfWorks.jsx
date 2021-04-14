import React from 'react'
import Button from './Button'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/ListOfWorks.css'

const ListOfWorks = () => {
    const textMessage = 'Ver mas'
    const rute = '/proyectos/listado'

    return (
        <>
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
        </>
    )
}

export default ListOfWorks
