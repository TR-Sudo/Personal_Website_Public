import { Deployed_Project_MainBody } from '../components/mainbody';
import BackToTop from '../components/BackTopTop';
import '../styles/mainbody.css';
import '../styles/project_card_only.css';
import '../styles/startpage.css';

export default function ProjectBody(){
    return(
        <main>
            <Deployed_Project_MainBody/>
            <BackToTop/>
        </main>
    )
}