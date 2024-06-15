import React from 'react';
import profilePhoto from '../assets/Profile.jpg';
import { CgProfile } from 'react-icons/cg';

const About = () => {
    return (
        <div name="about" className="w-full h-screen  text-gray-300 bg-transparent ">
            <div className="flex flex-col justify-center items-center w-full h-full">
                {/* About Me Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-7xl font-bold text-pink-600 flex items-center justify-center space-x-2">
                        <CgProfile size={50} />
                        About Me
                    </h1>
                </div>

                {/* Grid Layout for Photo and Content */}
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* Left Column - Profile Photo */}
                    <div className="text-center md:text-right ml-[15%]">
                        <img src={profilePhoto} alt="Profile Photo" className="max-w-[350px] mx-auto md:ml-0 mb-4 rounded-md shadow-lg"
                        />
                    </div>

                    {/* Right Column - About Content */}
                    <div className="text-justify">
    <div className="text-xl font-bold mb-8">
        <p className="md:text-5xl text-gray-100">
            Hi, I'm Mohanish Khambadkar. Nice to meet you.
        </p>
    </div>
    <div className="text-base md:text-2xl mt-4 text-gray-400">
    <p>
        I am actively seeking opportunities to enhance my skills, contribute to the success of your organization,
        and achieve exceptional results. I'm an enthusiastic individual with a strong background in web development.
        I excel as a team player and can make quick contributions to team objectives. My passion lies in frontend
        development, and I'm eager to work as a Frontend Developer.
    </p>
</div>

</div>

                </div>
            </div>
        </div>
    );
};

export default About;
