"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// New File: About.tsx
const react_1 = __importDefault(require("react"));
const About = () => {
    return (<div id="about" className="container pt-32">
      <h2 className="text-4xl md:text-5xl" data-aos="zoom-in-up">
        About Me
      </h2>
      <p className="text-gray-500 pt-4" data-aos="zoom-in-up">
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, & Metaverse. 
        Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>);
};
exports.default = About;
