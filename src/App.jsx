import "./index.css";

function App() {
  return (
    <>
      <div className="profile-container">
        <img
          src="\src\assets\image.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="name">Hammad Ali</h1>
        <p className="bio">
          Hello! I'm a passionate web developer learning React. I love building
          interactive user interfaces and solving problems.
        </p>

        <div className="skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <footer className="footer">
          © 2025 Hammad Ali. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
