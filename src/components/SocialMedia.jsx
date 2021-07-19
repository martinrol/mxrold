import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <>
            <a href='https://www.linkedin.com/in/martindavidroldan/' target='_blank' title="Linkedin">
                <AiFillLinkedin size='28px' />
            </a>
            <a href='https://github.com/mxrold' target='_blank' title="Github">
                <AiFillGithub size='28px' />
            </a>
        </>
    )
}

export default SocialMedia
