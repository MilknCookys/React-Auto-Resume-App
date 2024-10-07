const educationComponents = [
  {
    school: "London City University",
    startDate: "08/2020",
    endDate: "08/2024",
    degree: "Bachelors of Economics",
  },
  {
    school: "TAFE Queensland",
    startDate: "08/2021",
    endDate: "08/2022",
    degree: "Cert IV of Crime & Justice",
  },
];

export default function ResumeMain() {
  return (
    <main className="resumeMain">
      <section className="resumeMainEducation">
        <h3 className="resumeMainHeading">Education</h3>
        {educationComponents.map((component) => {
          return (
            <div className="resumeMainContent" key={component.degree}>
              <div>
                <h4>{component.school}</h4>
                <p>
                  <span>{component.startDate}</span> -{" "}
                  <span>{component.endDate}</span>
                </p>
              </div>
              <p>{component.degree}</p>
            </div>
          );
        })}
      </section>

      <section className="resumeMainExperience">
        <h3 className="resumeMainHeading">Experience</h3>
        <div className="resumeMainContent">
          <div>
            <h4>Valve</h4>
            <p>08/2019 - 09/2024</p>
          </div>
          <p>Accountant</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            sit molestias veniam pariatur porro accusamus soluta architecto
            minima obcaecati sequi ratione ipsa impedit neque, est harum eos rem
            molestiae saepe.
          </p>
        </div>
        <div className="resumeMainContent">
          <div>
            <h4>Valve</h4>
            <p>08/2019 - 09/2024</p>
          </div>
          <p>Accountant</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            sit molestias veniam pariatur porro accusamus soluta architecto
            minima obcaecati sequi ratione ipsa impedit neque, est harum eos rem
            molestiae saepe. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Facilis sit molestias veniam pariatur porro accusamus soluta
            architecto minima obcaecati sequi ratione ipsa impedit neque, est
            harum eos rem molestiae saepe.
          </p>
        </div>
      </section>
    </main>
  );
}
