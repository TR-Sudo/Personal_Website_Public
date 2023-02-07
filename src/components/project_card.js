import '../styles/project.css';
import { useNavigate } from 'react-router-dom';

export default function Card(props){
    const navigate = useNavigate();

    const toGithub = (link) => {
        window.location.href=link
    };

    const toReadme = (repo) => {
        navigate(`/project/${repo}`);
    }
    function Running(){
        return(
            <i className="fa fa-cog fa-spin fa fa-fw"></i>
        )
    }
    return(
        <div className="Card">
                <h1>{props.alive && <Running />}{props.name.toUpperCase()}</h1> 
                { props.img && <div className="card-Image">
                    <img src={props.img} alt="Project Image"></img>
                </div>}
                <p className="project_text">{props.description}</p>
                <p className="project_text">{props.dependencies}</p>
                <button class="button" onClick={()=>{toReadme(props.repo)}}>Readme File On Website</button>
                <button class="button" onClick={()=>{toGithub(props.Link)}}>See Project</button>
        </div>
    )
}
export function Deployed_Card(props){
    const navigate = useNavigate();

    const toGithub = (link) => {
        window.location.href=link
    };
    const toReadme = (repo) => {
        navigate(`/project/${repo}`);
    }

    function Running(){
        return(
            <i className="fa fa-cog fa-spin fa fa-fw"></i>
        )
    }
    return(
        <div>{props.alive && (<div className="Card">
                <h1><Running />{props.name.toUpperCase()}</h1> 
                { props.img && <div className="card-Image">
                    <img src={props.img} alt="Project Image"></img>
                </div>}
                <p className="project_text">{props.description}</p>
                <p className="project_text">{props.dependencies}</p>
                <button class="button" onClick={()=>{toReadme(props.repo)}}>Readme File On Website</button>
                <button class="button" onClick={()=>{toGithub(props.Link)}}>See Project</button>
        </div>)}
        </div>
    )
}



