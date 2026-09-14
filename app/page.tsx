const courses = [
  "Digital Integrated Circuits",
  "Signals and Systems",
  "Introduction to Nanoelectronics",
  "Digital Design",
  "Electromagnetic Fields and Waves",
  "Embedded Systems",
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navName">Sumit Chugh</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* About */}
      <section className="hero" id="about">
        <p className="smallTitle">ELECTRICAL ENGINEERING STUDENT</p>

        <h1>Hi, I&apos;m Sumit Chugh.</h1>

        <p className="heroText">
          I am an Electrical Engineering student at Penn State with hands-on 
          experience in PCB and analog circuit design, hardware validation, embedded
          systems, and CMOS/VLSI.
        </p>

        <a href="#education" className="button">
          View My Journey
        </a>
      </section>

      {/* Career Goal */}
      <section className="section">
        <h2>Career Goal</h2>

        <p>
          My goal is to build a career in electrical and hardware engineering,
          with a focus on semiconductor technology, embedded systems, circuit
          design, sensing systems, and PCB development. I am interested in
          applying engineering principles to develop reliable and practical
          hardware systems.
        </p>
      </section>

      {/* Education */}
      <section className="section" id="education">
        <h2>Education</h2>

        <div className="card">
          <h3>Pennsylvania State University</h3>
          <p>
            <strong>Bachelor of Science in Electrical Engineering</strong>
          </p>
          <p>University Park, Pennsylvania</p>
          <p>Expected Graduation: May 2027</p>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <h2>Awards</h2>

        <div className="card">
          <p>
            Dean's List (Spring 2024, Fall 2024, Summer 2025, and Spring 2026)
          </p>
        </div>
      </section>

      {/* Highlighted Courses */}
      <section className="section">
        <h2>Highlighted Courses</h2>

        <div className="courseGrid">
          {courses.map((course) => (
            <div className="courseCard" key={course}>
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="section" id="experience">
        <h2>Work Experiences</h2>

        <div className="card">
          <h3>Undergraduate Researcher</h3>
          <p className="subheading">Penn State University</p>

          <p>
            Working on electrical and biomedical sensing systems involving
            custom potentiostat development, ESP32-based electronics,
            electrochemical sensors, PCB design, and 3D-printed microneedle
            structures.
          </p>
        </div>

        <div className="card">
          <h3>Math Grader</h3>
          <p className="subheading">Penn State University</p>
          Grade undergraduate calculus and algebra assignments and quizzes
          with consistent, accurate evaluation.
          <p>
            
          </p>
        </div>
      </section>



      {/* Final Project */}
      <section className="section" id="projects">
        <h2>Final Project</h2>

        <div className="projectPlaceholder">
          <h3>Final Project Coming Soon</h3>

          <p>
            This section is reserved for my final project. It will include the
            project description, hardware and software used, design process,
            results, photographs, and source code.
          </p>

          <button disabled>View Project</button>
        </div>
      </section>

      {/* Video Demos */}
      <section className="section">
        <h2>Video Demos</h2>

        <p>
          Demonstration videos of my final project and other engineering work
          will be added here.
        </p>

        <div className="videoGrid">
          <div className="videoPlaceholder">
            <span>▶</span>
            <p>Project Demo Video</p>
          </div>

          <div className="videoPlaceholder">
            <span>▶</span>
            <p>Additional Demo</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact Information</h2>

        <p>
          Feel free to contact me regarding engineering projects, research,
          internships, or professional opportunities.
        </p>

        <div className="contactLinks">
          <a href="mailto:schugh147@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/sumit-chugh-531194248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Schugh26"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/Sumit_Chugh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View Resume
          </a>
        </div>
      </section>

  
    </main>
  );
}