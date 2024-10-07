import { act, useState } from "react";
import "../styles/App.css";
import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";
import ResumeHeaderForm from "./ResumeHeaderForm";
import ResumeEducationForm from "./ResumeEducationForm";

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

  const [openForm, setOpenForm] = useState(1);

  function handleOpenForm(e) {
    const targetID = Number(e.target.id);
    openForm === targetID ? setOpenForm(null) : setOpenForm(targetID);
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
        <ResumeEducationForm
          isOpen={openForm === 1}
          setOpenForm={handleOpenForm}
        />
        <h1>Does this text move?</h1>
      </section>
      <section className="resume">
        <ResumeHeader personalInformation={personalInformation} />
        <ResumeMain />
      </section>
    </>
  );
}

export default App;
