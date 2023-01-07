import Intro from '../components/intro';
import MainBody from '../components/mainbody';
import Nav from '../components/Navbar';


export default function App(){
    return(
        <main>
            <Nav />
            <Intro />
            <MainBody />      
        </main>
    )
}