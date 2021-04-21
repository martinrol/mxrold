import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiBootstrap, SiStyledComponents, SiBoost } from 'react-icons/si'
import { courses } from '../../api/api.json'
import '../assets/styles/components/About.css'

const About = () => {
  return (
    <section className="About">
      <div className="About__me">
        <div class="About__me--info">
          <h2>Acerca de mí</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit dolorem suscipit animi reiciendis mollitia ullam, quam minima totam minus porro iusto officiis architecto. Animi expedita deleniti sed dolorum assumenda.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta, repellendus sapiente labore repellat adipisci consectetur laborum ullam officiis eveniet, debitis ad, similique facilis perspiciatis nostrum. Beatae voluptas at velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia accusamus sapiente, non aliquam minima? Facilis quam animi quaerat! Dolor esse repellendus sunt quibusdam consectetur laboriosam earum officiis cupiditate laudantium.</p>
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
              JavaScript
            </p>
            <p>
              React
            </p>
            <p> 
              Git
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
