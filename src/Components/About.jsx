import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4C2C2] px-4">
            <h1 className="text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
            About Us
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
            Welcome to our photography gallery! We are passionate about capturing the beauty of the world through our lenses. Our collection features a diverse range of images, from breathtaking landscapes to intimate portraits. Each photograph tells a unique story, and we invite you to explore our work and share in our passion for photography.
            </p>
        </div>
    </div>
  )
}

export default About