import '../styles/project.css';
import "aos/dist/aos.css";

export default function Card(props){
    const toGithub = (link) => {
        window.location.href=link
    };
    function Running(){
        return(
            <i className="fa fa-cog fa-spin fa fa-fw"></i>
        )
    }
    return(
        <div className="Card">
                <h1>{props.alive && <Running />}{props.name} <i onClick={()=>{toGithub(props.Link)}}className="fa fa-external-link" /></h1>
                <p>{props.description}</p>
                <p>{props.dependencies}</p>
        </div>
    )
}


