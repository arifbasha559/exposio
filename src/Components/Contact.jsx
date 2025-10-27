import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4C2C2] px-4">
                <h1 className="text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl text-center">
                    We'd love to hear from you! Whether you have questions about our photography services, want to collaborate, or just want to say hello, feel free to reach out. You can contact us via
                </p>
                <div className="flex gap-4 items-center mt-4">

                    <p className="text-lg text-gray-700 max-w-2xl text-center underline mt-2">
                        <a href="mailto:arifbasha559@gmail.com">
                            <MdMail className='text-3xl hover:text-[#ff084a]' />
                        </a>
                    </p>
                    <p className="text-lg text-gray-700 max-w-2xl text-center underline mt-2">
                        <a href="https://github.com/arifbasha559/">
                            <BsGithub className='text-3xl hover:text-[#ff0081]' />
                        </a>
                    </p>
                    <p className="text-lg text-gray-700 max-w-2xl text-center underline mt-2">
                        <a href="https://www.linkedin.com/in/arifbasha559/">
                            <BsLinkedin className='text-3xl hover:text-[#ff084a] rounded-lg' />
                        </a>
                    </p>
                </div>
                <p className="text-lg text-gray-700 max-w-2xl text-center mt-4">
                    We look forward to connecting with you and capturing beautiful moments together!
                </p>
            </div>
        </div>
    )
}

export default Contact