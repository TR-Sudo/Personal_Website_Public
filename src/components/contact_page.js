import "../styles/contact_body.css";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./footer";
export default function ContactForm(){
    const form = useRef();
    const [alert,setAlert] = useState("");
    const button = document.getElementById('Alert');

    const sendEmail = (e) => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                button.style.display = "block";
                setAlert("Email Sent ✔️");
                }, (error) => {
                    button.style.display = "block";
                    setAlert("Error Sending Email to T.rashid489@gmail.com ❌");
                });
    };

    return(
        <div className="ContactPage">
            <main className="Contact_Body">
                <h1>GET IN TOUCH</h1>
                <form ref={form} onSubmit={(e)=>{
                    e.preventDefault();
                    setTimeout(()=>{
                        console.log("Sending Email");
                    },10000);
                }}>
                    <input className="Name" type="text" id="lname" placeholder="Enter Name" name="user_name" required></input>
                    <input className="Name" type="email" id="Email" placeholder="Email Address" name="user_email" required></input>
                    <textarea className="Content" type="text" id="Email" placeholder="Contents..." name="message" required></textarea>
                    <div className="Message">
                        <div id="Alert" className="Checkmark"><h1>{alert}</h1></div>

                        <input className="Submit_Button" type="submit" value="Send"></input>
                    </div>
                </form>
                </main>
            <Footer/>
        </div>
    )
}   