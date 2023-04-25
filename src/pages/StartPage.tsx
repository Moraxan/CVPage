import './StartPage.css';
import { Contact } from '../components/Contact/Contact';
import { Education } from '../components/Education/Education';
import { Experience } from '../components/Experience/Experience';

export const StartPage = () => {
    return (
        <div className="startpage-container">
            <div className="contact"> 
                <Contact />
            </div>
            <div className="education">
                <Education />
            </div>
            <div className="experience">
                <Experience />
            </div>
        </div>
    );
};