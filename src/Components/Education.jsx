import React from "react";

const Education = () => {
  const educationItemStyle = {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div>
      <h1 className="light" id="education">
        Education
      </h1>
      <div style={educationItemStyle}>
        <h2>Master of Science in Computer Science</h2>
        <p>
          University of XYZ, City, Country
          <br />
          Graduated: May 2022
        </p>
        <p>
          Developed advanced skills in algorithms, data structures, and software engineering.
          Completed a thesis on "Exploring Machine Learning Algorithms for Image Recognition."
        </p>
      </div>

      <div style={educationItemStyle}>
        <h2>Bachelor of Arts in Graphic Design</h2>
        <p>
          ABC University, City, Country
          <br />
          Graduated: May 2018
        </p>
        <p>
          Acquired a strong foundation in visual design principles, typography, and creative
          problem-solving. Participated in various design projects and internships, gaining hands-on
          experience in the field.
        </p>
      </div>

      {/* Add more education items as needed */}
    </div>
  );
};
export default Education;
