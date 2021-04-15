import React from 'react'
import { BiWorld } from 'react-icons/bi'
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
                    <a href={github}>
                        <AiFillGithub size="28px"/>
                    </a>
                    <a href={url}>
                        <BiWorld size="28px"/>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default TotalWorksList
