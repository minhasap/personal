import './Projects.css';
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import ProjectfourImage from '../../assets/images/Olx.png';
import ProjectsevenImage from '../../assets/images/conqod.png';
import { useMemo } from "react";
import { Project as ProjectType } from "../../Types/Project.ts";
import { Project } from "../";

export const Projects = () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [


        {
            title: 'CONQOD',
            subtitle: 'Responsive Template',
            description: "Responsive Template Used HTML motion and tailwind CSS ",

            github: '',
            website: 'https://www.conqod.site/',
            image: ProjectsevenImage,
            techStack: ['React Js', 'TailwindCSS']
        },
        {
            title: 'Netflix',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: '',
            website: '',
            image: ProjectThreeImage,
            techStack: ['React', 'firebase', 'axios', 'redux']
        }, {
            title: 'Olx',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",

            github: '',
            website: '',
            image: ProjectfourImage,
            techStack: ['React', 'firebase', 'axios', 'redux']
        },

    ], []);

    return (
        <section id={'projects'} className={'projects container textestylee'}>
            <div className={'projects__header textestyleea'}>
                <p className={'projects__heading textestyleee'}>Projects</p>
                <p className={'projects__subheading textestyleea'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list textestyleea'}>
                {projects.map((project, index) => <Project key={index} project={project} />)}
            </div>
        </section>
    );
};