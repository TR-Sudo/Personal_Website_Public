import "../styles/contact_body.css";
import React, {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./footer";
export default function ContactForm(){
    const form = useRef();
    const [alert,setAlert] = useState("");
    const [lastSent, setLastSent] = useState(0);
    const [buttonState, setButtonState] = useState({
        display: "none",
        animation: "none",
        border: "2px solid grey",
    });

    
    const sendEmail = (e) => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                setButtonState({
                    display: "block",
                    animation: "none",
                    border: "2px solid green"
                });
                setAlert("Email Sent ✔️");
                }, (error) => {
                    setButtonState({
                        display: "block",
                        animation: "none",
                        border: "2px solid red"
                    });
                    setAlert("Error Sending Email ❌");
                });
    };


    return(
        <div className="ContactPage">
            <main className="Contact_Body">
                <h1>GET IN TOUCH</h1>
                <form ref={form} onSubmit={(e)=>{
                    const currentTime = Date.now();
                    e.preventDefault();
                    if (currentTime - lastSent < 10000) {
                        return;
                    }
                    else{                        
                        setButtonState({
                            display: "block",
                            animation: "blinking 1s infinite",
                            border: "2px solid grey"
                        });
                        setAlert("Sending Email...");
                        sendEmail();
                        setLastSent(currentTime);
                    }                    
                }}>
                    <input className="Name" type="text" id="lname" placeholder="Enter Name" name="user_name" required></input>
                    <input className="Name" type="email" id="Email" placeholder="Email Address" name="user_email" required></input>
                    <textarea className="Content" type="text" id="Email" placeholder="Contents..." name="message" required></textarea>
                    <div className="Message">
                        <div id="Alert" className="Checkmark" style={buttonState}><h1>{alert}</h1></div>

                        <input className="Submit_Button" type="submit" value="Send"></input>
                    </div>
                </form>
                </main>
            <Footer/>
        </div>
    )
}   