import React from 'react'
import { RiShareBoxLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import '../assets/styles/components/TotalWorksList.css'

const TotalWorksList = ({ id, title, build, github, url }) => {
    return (
        <div className="TotalWorks__item">
            <div className="TotalWorks__item--id">
                <p>{id}</p>
            </div>
            <div className="TotalWorks__item--title">
                <p>{title}</p>
            </div>
            <div className="TotalWorks__item--tools">
                <p>{build}</p>
            </div>
            <div className="TotalWorks__item--links">
                <span>
                    {
                        github === null
                        ? null
                        : <a href={github} title="Enlace de Github">
                            <AiFillGithub size="28px"/>
                        </a>
                    }
                    {
                        url === null
                        ? null
                        :<a href={url}>
                            <RiShareBoxLine size="28px" title="Enlace al sitio web"/>
                        </a>
                    }
                </span>
            </div>
        </div>
    )
}

export default TotalWorksList
