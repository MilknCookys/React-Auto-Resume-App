import { act, useState } from "react";
import "../styles/App.css";
import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";
import ResumeHeaderForm from "./ResumeHeaderForm";
import ResumeMainForm from "./ResumeMainForm";

function App() {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: "Full Name",
    email: "fake.email@gmail.com",
    phone: "0123 456 789",
    address: "123 Fake Road City",
  });

  function handlePersonalInfo(e) {
    let { id, value } = e.target;

    setPersonalInformation({
      ...personalInformation,
      [id]: value,
    });
  }

  const [mainInformation, setMainInformation] = useState({
    school: "School",
    degree: "Degree",
    schoolStartDate: "07/10/2024",
    schoolEndDate: "present",
  });

  function handleMainInfo(e) {
    let { id, value } = e.target;

    setMainInformation({
      ...mainInformation,
      [id]: value,
    });
  }

  const [activeForm, setActiveForm] = useState(null);

  function changeActiveForm(e) {
    const clickedId = Number(e.target.id);
    console.log(clickedId);
    if (activeForm === clickedId) {
      setActiveForm(null);
    } else {
      setActiveForm(clickedId);
    }
  }

  return (
    <>
      <section className="resumeForm">
        <ResumeHeaderForm
          personalInformation={personalInformation}
          handlePersonalInfo={handlePersonalInfo}
          isActive={activeForm === 0}
          changeActiveForm={changeActiveForm}
          id={0}
        />
        <ResumeMainForm
          mainInformation={mainInformation}
          handleMainInfo={handleMainInfo}
          isActive={activeForm === 1}
          changeActiveForm={changeActiveForm}
          id={1}
        />
      </section>
      <section className="resume">
        <ResumeHeader personalInformation={personalInformation} />
        <ResumeMain mainInformation={mainInformation} />
      </section>
    </>
  );
}

export default App;
