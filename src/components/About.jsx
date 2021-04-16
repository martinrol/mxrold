import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import '../assets/styles/components/About.css'

const About = () => {
  return (
    <section className="About">
      <div className="About__me">
        <h2>Acerca de mí</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit dolorem suscipit animi reiciendis mollitia ullam, quam minima totam minus porro iusto officiis architecto. Animi expedita deleniti sed dolorum assumenda.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dicta, repellendus sapiente labore repellat adipisci consectetur laborum ullam officiis eveniet, debitis ad, similique facilis perspiciatis nostrum. Beatae voluptas at velit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error mollitia accusamus sapiente, non aliquam minima? Facilis quam animi quaerat! Dolor esse repellendus sunt quibusdam consectetur laboriosam earum officiis cupiditate laudantium.</p>
      </div>
      <div className="About__skills">
        <div className="About__skills--animation">
          <div className="About__skills--animation-one">
            <div className="About__skills--animation-two">
              <div className="About__skills--animation-three">
                <div className="About__skills--animation-four">
                  <span className="svg-one">
                    <AiFillHtml5  size="28px"/>
                  </span>
                  <span className="svg-two">
                    <DiCss3 size="28px"/>
                  </span>
                  <span className="svg-three">
                    <SiJavascript size="28px"/>
                  </span>
                  <span className="svg-four">
                    <FaReact size="28px"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About__skills--complement">
          <h3>Complementos</h3>
          <div className="About__skills--complements-items">
            <span>Example</span>
            <span>Example</span>
            <span>Example</span>
            <span>Example</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
