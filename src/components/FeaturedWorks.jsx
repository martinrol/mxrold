import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/FeaturedWorks.css'

const FeaturedProjects = () => {
    const IMAGE_EXAMPLE = 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'

    return (
        <>
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
        </>
    )
}

export default FeaturedProjects
