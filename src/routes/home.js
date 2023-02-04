import BackToTop from '../components/BackTopTop';
import Intro from '../components/intro';
import MainBody from '../components/mainbody';

export default function Home(){
    return(
        <main>
            <Intro />
            <MainBody />
            <BackToTop/>
        </main>        
    )
}