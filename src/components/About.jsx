import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiStyledComponents } from 'react-icons/si'
import { courses } from '../../api/api.json'
import '../assets/styles/components/About.css'

const About = () => {
  return (
    <section className="About">
      <div className="About__me">
        <div className="About__me--info">
          <h2>Acerca de mí</h2>
          <p>¡Hola! Soy desarrollador frontend junior en las tecnologías de HTML, CSS, JavaScript y React.</p>
          <p>Desde hace un año decidí dedicarme al mundo de la programación y tecnología luego de haber conocido todos los productos digitales y aplicaciones geniales que se pueden crear tan solo con una computadora, internet, creatividad, compromiso y muchas ganas.</p>
          <p>Soy autodidacta, estudió en la plataforma de educación online Platzi, donde me centro principalmente en el área de desarrollo web y diversos temas de mi interés tales como otros lenguajes de programación, diseño e inglés.</p>
          <p>Me gusta aprender sobre nuevos contenidos, proponerme retos y mejorar para superarme día a día.</p>
          <p>Si quieres saber más sobre mi, te invito a que veas algunos de mis proyectos.</p>
        </div>
        <div>
          <div className="About__me--title-courses">
            <h3>Certificados</h3>
            <a href="https://platzi.com/p/Martinrol/" target="_blank">
              Ver mi perfil en Platzi
            </a>
          </div>
          <article className="About__me--courses">
            {
              courses.map((item) => (
                <div className="About__me--courses-item" key={item.id}>
                  <a href={item.url} target="_blank" title={item.title}>
                    <div>
                      <p>{item.id}</p>
                    </div>
                    <img src={item.image} alt={item.title}/>
                  </a>
                </div>
              ))
            }
          </article>
        </div>
      </div>
      <div className="About__skills">
        <h3>Tecnologías</h3>
        <div className="About__skills--animation">
          <div className="About__skills--animation-one">
            <div className="About__skills--animation-two">
              <div className="About__skills--animation-three">
                <div className="About__skills--animation-four">
                  <div className="About__skills--animation-five">
                    <span className="svg-one">
                      <AiFillHtml5  size="28px" title="Logo de HTML" tabIndex="0"/>
                    </span>
                    <span className="svg-two">
                      <DiCss3 size="28px" title="Logo de CSS" tabIndex="0"/>
                    </span>
                    <span className="svg-three">
                      <SiBootstrap size="28px" title="Logo de Bootstrap" tabIndex="0"/>
                    </span>
                    <span className="svg-four">
                      <SiTailwindcss size="28px" title="Logo de Tailwind CSS" tabIndex="0"/>
                    </span>
                    <span className="svg-five">
                      <SiJavascript size="28px" title="Logo de JavaScript" tabIndex="0"/>
                    </span>
                    <span className="svg-six">
                      <SiStyledComponents size="28px" title="Logo de Styled Components" tabIndex="0"/>
                    </span>
                    <span className="svg-seven">
                      <FaReact size="28px" title="Logo de React" tabIndex="0"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About__skills--complement">
          <div className="About__skills--complements-items">
            <p>
              HTML
            </p>
            <p>
              CSS
            </p>
            <p>
              Bootstrap
            </p>
            <p>
              Tailwind CSS
            </p>
            <p>
              Styled Components
            </p>
            <p>
              JavaScript - ES6
            </p>
            <p>
              React
            </p>
            <p> 
              Git
            </p>
            <p> 
              npm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
