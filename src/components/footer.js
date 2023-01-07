import "../styles/footer.css"

export default function Footer(){
    function toLinkedin(){
        window.location.href="https://www.linkedin.com/in/talha-rashid-489tr/"
    }
    function toGithub(){
        window.location.href="https://github.com/TR-Sudo"
    }
    return(
        <footer id="Contact">
            <h1>@2022 Created Using React JS ( Email T.rashid489@gmail.com )</h1>
            <div className="iconfooter">
                <img className="imgfooter" onClick={toLinkedin} src='../images/linkedinfooter.png' href="https://www.linkedin.com/in/talha-rashid-489tr/" alt="Linkedin"/>
                <img className="imgfooter" onClick={toGithub} src='../images/githubfooter.png' href="https://github.com/TR-Sudo" alt="Github"/>
            </div>
        </footer>
    )
}