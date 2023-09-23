import React from "react";
import Title from "./Title";

function Contact(){
    return(
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/slug"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-green-400 dark:border-beige-600 border-2 rounded-md focus:outline-none"
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-green-400 dark:border-beige-600 border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-green-400 dark:border-beige-600 border-2 rounded-md focus:outline-none"
                    />
                    <div class="flex items-center justify-center md:justify-start">
                    <button
                        type="button"
                        className="px-10 py-3 w-full text-off-white font-medium rounded-md bg-gradient-to-r from-green-400 to-grey-300 dark:bg-gradient-to-r dark:from-beige-600"
                    >
                        Send
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;