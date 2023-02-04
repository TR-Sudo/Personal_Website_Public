import Project_MainBody from '../components/project_only_mainbody';
import '../styles/mainbody.css';
import '../styles/project_card_only.css';
import BackToTop from '../components/BackTopTop';

export default function ProjectBody(){
    return(
        <main>
            <Project_MainBody/>
            <BackToTop/>
        </main>
    )
}