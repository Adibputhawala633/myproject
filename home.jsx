import React from 'react';
import './home.css';
const Course = ({ title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

const App = () => {
    const courses = [
        {
            id: 1,
            title: "Master Animation",
            description: `A comprehensive program to master 2D and 3D animation techniques, character development, and storytelling for film and digital media.`,
        },
        {
            id: 2,
            title: "Master VFX",
            description: `Dive deep into visual effects, including compositing, rotoscoping, match-moving, and particle effects for realistic cinematic experiences.`,
        },
        {
            id: 3,
            title: "Master UI/UX Design",
            description: `Learn to create intuitive and engaging user interfaces (UI) and user experiences (UX) for web, mobile, and software applications.`,
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            <h2 className="grid grid-cols-4 gap-4;">
                Welcome to <span className="text-blue-600">FrameBox</span>!
            </h2>

            <h3 className="grid grid-cols-4 gap-4">
                Explore Our Courses:
            </h3>

            <div className="grid grid-cols-4 gap-4">
                {courses.map((course) => (
                    <Course
                        key={course.id}
                        title={course.title}
                        description={course.description}
                    />
                ))}
            </div>
        </div>
    );
};
export default App;
