import React, { useState } from 'react';
import Contact from './Contact';
import './styles/ContactForm.css';






const ContactForm = () => {


    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            subject: subject,
            message: message
        });

        js_send(subject, message);

        console.log("Submitted");
    }

    const form_id_js = "javascript_form";

    let data_js = {
        "access_token": "3ytxr8382c7b6smyfojvd3ly"
    };

    const js_onSuccess = () => {
        // remove this to avoid redirect
        setStatus('sent');
    }

    const js_onError = (error) => {
        // remove this to avoid redirect
        setStatus('error')
    }


    const js_send = (subject, message) => {

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
                if (request.readyState == 4) {
                    js_onError(request.response);
                }
        };


        data_js['subject'] = subject;
        data_js['text'] = message;

        let params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }


    const toParams = (data_js) => {
        var form_data = [];
        for (var key in data_js) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }


    if (status == 'sent') {
        return (
            <div className='Contact__Message'>
                <img src="https://img.icons8.com/color/96/000000/ok--v3.png" />
                <span>Your message has been sent succesfully</span>
            </div>

        );
    }

    if (status == 'error') {
        return (
            <div className='Contact__Message'>
                <img src="https://img.icons8.com/color/48/000000/error--v2.png" />
                <span>Sorry, there's been an error while sending your message</span>
            </div>
        );
    }

    return (
        <form className="Contact__Form">
            <label className="Contact__Form--label" >Subject</label>
            <input onChange={(e) => setSubject(e.target.value)} type="text" name="subject" />
            <label className="Contact__Form--label">Message</label>
            <textarea onChange={(e) => setMessage(e.target.value)} name="text"></textarea>
            <button type="submit" onClick={handleSubmit}>Send Email</button>
        </form>
    );

}

export default ContactForm;