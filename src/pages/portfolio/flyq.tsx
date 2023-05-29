"useclient";

import Project from '@/app/components/project';
import '../../app/globals.css'

interface ProjectProps {
    title: string;
    image: string;
    about: string;
    status: string;
    link?: string;
}

export default function Flyq() {
    const project = {

    }

    return (
        <Project />
    );
}