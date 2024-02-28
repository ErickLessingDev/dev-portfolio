"use client"
import React, { useState, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [stateMessage, setStateMessage] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            console.log("Sending email...");
            const response: EmailJSResponseStatus = await emailjs.sendForm(
                "service_d5hkkq4",
                "template_0r7z25y",
                formRef.current!,
                {
                    publicKey: 'bxkn7GtLqyxOedQEr',
                }
            );
            console.log("Email sent successfully", response);

            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
        } catch (error) {
            console.error("Error sending email:", error);
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
        }

        // Clear the form after sending the email
        formRef.current?.reset()
    };

    return (
        <div className='flex flex-col items-center w-full'>
         <form ref={formRef} onSubmit={sendEmail} className="bg-white rounded p-4 px-8 w-[80%] md:w-[40%] mx-auto block-shadow">
            <h1 className='text-3xl kode-mono-700 text-center text-gray-600 my-4'>Contact Me</h1>
            <div className="mb-4">
                <label htmlFor="user_name" className="block select-none text-gray-600 font-semibold ml-1 mb-1">Name</label>
                <input id="user_name" type="text" name="user_name" className="block p-1 w-full border-gray-300 rounded-md border border-orange-400 focus:outline-none" required />
            </div>
            <div className="mb-4">
                <label htmlFor="user_email" className="block select-none text-gray-600 font-semibold ml-1 mb-1">Email</label>
                <input id="user_email" type="email" name="user_email" className="block p-1 w-full border-gray-300 rounded-md border border-orange-400 focus:outline-none" required />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block select-none text-gray-600 font-semibold ml-1 mb-1">Message</label>
                <textarea id="message" name="message" className="block p-1 w-full border-gray-300 rounded-md border border-orange-400 focus:outline-none" required />
            </div>
            <div className='flex w-full justify-center'>
                <button type="submit" className="bg-gray-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </div>
            {stateMessage && <p>{stateMessage}</p>}
        </form>
        </ div>
        
    );
};

export default ContactForm;