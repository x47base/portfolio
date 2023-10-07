import './miniCV.css';

import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoLogoNodejs, IoLogoPython } from 'react-icons/io';

import Icon from './Icon';

export default function miniCV() {
    return (
        <div className="flex flex-col rounded-lg p-4 pt-12 pb-8 bg-white text-black w-72 justify-center items-center">
            <img alt="person" src="./images/undraw_pic_profile_re_7g2h.svg" className="w-[8rem] rounded-full"/>
            <span className="text-3xl font-medium mt-2">Samuel Spink</span>
            <span className="font-semibold text-lightbrand">Application Developer</span>
            <div id="links" className="mt-4 flex flex-wrap gap-2">
                <a href="https://twitter.com/" target="_blank">
                    <Icon icon={<BsTwitter size="26"/>} classes="text-twitter" />
                </a>
                <a href="https://ch.linkedin.com/" target="_blank" disabled="">
                    <Icon icon={<BsLinkedin size="26"/>} classes="text-linkedin" />
                </a>
                <a href="https://github.com/x47base" target="_blank">
                    <Icon icon={<BsGithub size="26"/>} classes="text-github" />
                </a>
            </div>
        </div>
    );
}