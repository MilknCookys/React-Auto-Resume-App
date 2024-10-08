export default function ResumeMain({
  educationComponents,
  experienceComponents,
}) {
  return (
    <main className="resumeMain">
      <section className="resumeMainEducation">
        <h3 className="resumeMainHeading">Education</h3>
        {educationComponents.map((component) => {
          return (
            <div className="resumeMainContent" key={component.key}>
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
        {experienceComponents.map((component) => {
          return (
            <div className="resumeMainContent" key={component.key}>
              <div>
                <h4>{component.company}</h4>
                <p>
                  <span>{component.startDate}</span> -{" "}
                  <span>{component.endDate}</span>
                </p>
              </div>
              <p>{component.role}</p>
            </div>
          );
        })}

        {/* <div className="resumeMainContent">
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
        </div> */}
      </section>
    </main>
  );
}
