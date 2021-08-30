import React from 'react'
import skills from '../../api/skills.json'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiStyledComponents } from 'react-icons/si'
import { courses } from '../../api/api.json'
import '../assets/styles/components/About.css'

const About = () => {
  return (
    <section className="About" id="acerca">
      <div className="About__me">
        <div className="About__me--info">
          <h2>Acerca de mí</h2>
          <p>¡Hola! Soy Frontend Developer en las tecnologías de HTML, CSS, JavaScript y React.</p>
          <p>Desde hace un año decidí dedicarme al mundo de la programación y tecnología luego de haber conocido todos los productos digitales y aplicaciones geniales que se pueden crear, tan solo con una computadora, creatividad, compromiso y muchas ganas.</p>
          <p>Soy autodidacta, estudio en la plataforma de educación online Platzi, donde me centro principalmente en el área de desarrollo web y diversos temas de mi interés tales como otras tecnologías, diseño e inglés.</p>
          <p>Me gusta aprender sobre nuevos contenidos, proponerme retos y mejorar diariamente para superarme.</p>
          <p>Si quieres saber más sobre mí, te invito a que veas algunos de mis proyectos.</p>
        </div>
        <div>
          <div className="About__me--title-courses">
            <h3>Certificados</h3>
            <a href="https://platzi.com/p/mxrold/" target="_blank" rel="nofollow">
              Ver todos los certificados
            </a>
          </div>
          <article className="About__me--courses">
            {
              courses.map((item) => (
                <div className="About__me--courses-item" key={item.id}>
                  <a href={item.url} target="_blank" title={item.title}>
                  <div className='About__me--courses-item-number'>
                    <div className='About__me--courses-item-number-circle'>
                      {item.id}
                    </div>
                  </div>
                    <img src={item.image} alt={item.title} loading="lazy"/>
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
                      <AiFillHtml5  size="28px" title="Logo de HTML"/>
                    </span>
                    <span className="svg-two">
                      <DiCss3 size="28px" title="Logo de CSS"/>
                    </span>
                    <span className="svg-three">
                      <SiBootstrap size="28px" title="Logo de Bootstrap"/>
                    </span>
                    <span className="svg-four">
                      <SiTailwindcss size="28px" title="Logo de Tailwind CSS"/>
                    </span>
                    <span className="svg-five">
                      <SiJavascript size="28px" title="Logo de JavaScript"/>
                    </span>
                    <span className="svg-six">
                      <SiStyledComponents size="28px" title="Logo de Styled Components"/>
                    </span>
                    <span className="svg-seven">
                      <FaReact size="28px" title="Logo de React"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About__skills--complement">
          <div className="About__skills--complements-items">
              {
                skills.skills.map(item => 
                  <p key={item.name}>
                    {item.name}
                  </p>
                )
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
