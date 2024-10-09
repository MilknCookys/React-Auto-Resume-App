import { act, useState } from "react";
import "../styles/App.css";
import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";
import ResumeHeaderForm from "./ResumeHeaderForm";
import ResumeEducationForm from "./ResumeEducationForm";
import ResumeExperienceForm from "./ResumeExperienceForm";

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

  const [educationComponents, setEducationComponents] = useState([
    {
      school: "London City University",
      startDate: "08/2020",
      endDate: "08/2024",
      degree: "Bachelors of Economics",
      key: "Default One",
    },
    {
      school: "TAFE Queensland",
      startDate: "05/2023",
      endDate: "05/2024",
      degree: "Certificate IV of Crime & Justice",
      key: "Default Two",
    },
  ]);

  function handleEducationComponents(e) {
    const { id, value } = e.target;

    const targetIndex = educationComponents.findIndex(
      (component) =>
        component.key === e.target.closest(".educationComponent").id
    );

    const updatedComponents = [...educationComponents];
    updatedComponents[targetIndex] = {
      ...updatedComponents[targetIndex],
      [id]: value,
    };

    setEducationComponents(updatedComponents);
  }

  function deleteEducationComponent(e) {
    // const { id, value } = e.target;
    // console.log({ id, value });

    const targetIndex = educationComponents.findIndex(
      (component) =>
        component.key === e.target.closest(".educationComponent").id
    );

    const updatedComponents = educationComponents.filter(
      (component, index) => index !== targetIndex
    );

    setEducationComponents(updatedComponents);
  }

  function newEducationComponent() {
    const newComponent = {
      school: "Edit me!",
      startDate: "Edit me too!",
      endDate: "And me!",
      degree: "Me please!",
      key: `${crypto.randomUUID()}`,
    };

    const updatedComponents = [...educationComponents];
    updatedComponents.push(newComponent);

    setEducationComponents(updatedComponents);
  }

  const [experienceComponents, setExperienceComponents] = useState([
    {
      company: "Valve",
      startDate: "08/2020",
      endDate: "08/2024",
      role: "Software Engineer",
      key: "Default One",
    },
    // {
    //   school: "TAFE Queensland",
    //   startDate: "05/2023",
    //   endDate: "05/2024",
    //   degree: "Certificate IV of Crime & Justice",
    //   key: "Default Two",
    // },
  ]);

  function handleExperienceComponents(e) {
    const { id, value } = e.target;

    const targetIndex = experienceComponents.findIndex(
      (component) =>
        component.key === e.target.closest(".experienceComponent").id
    );

    const updatedComponents = [...experienceComponents];
    updatedComponents[targetIndex] = {
      ...updatedComponents[targetIndex],
      [id]: value,
    };

    setExperienceComponents(updatedComponents);
  }

  function deleteExperienceComponent(e) {
    const targetElement = e.target.closest(".experienceComponent");

    const targetIndex = experienceComponents.findIndex(
      (component) => component.key === targetElement.id
    );

    const updatedComponents = experienceComponents.filter(
      (component, index) => index !== targetIndex
    );

    setExperienceComponents(updatedComponents);
  }

  function newExperienceComponent() {
    const newComponent = {
      company: "Edit me!",
      startDate: "Edit me too!",
      endDate: "And me!",
      role: "Me please!",
      key: `${crypto.randomUUID()}`,
    };

    const updatedComponents = [...experienceComponents];
    updatedComponents.push(newComponent);

    setExperienceComponents(updatedComponents);
  }

  const [activeForm, setActiveForm] = useState(null);

  function changeActiveForm(e) {
    const clickedId = Number(e.target.id);
    // console.log(clickedId);
    if (activeForm === clickedId) {
      setActiveForm(null);
    } else {
      setActiveForm(clickedId);
    }
  }

  const [openForm, setOpenForm] = useState(0);

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
          educationComponents={educationComponents}
          handleEducationComponents={handleEducationComponents}
          deleteEducationComponent={deleteEducationComponent}
          newEducationComponent={newEducationComponent}
        />
        <ResumeExperienceForm
          isOpen={openForm === 2}
          setOpenForm={handleOpenForm}
          experienceComponents={experienceComponents}
          handleExperienceComponents={handleExperienceComponents}
          deleteExperienceComponent={deleteExperienceComponent}
          newExperienceComponent={newExperienceComponent}
        />
        {/* <h1>Does this text move?</h1> */}
      </section>
      <section className="resume">
        <ResumeHeader personalInformation={personalInformation} />
        <ResumeMain
          educationComponents={educationComponents}
          experienceComponents={experienceComponents}
        />
      </section>
    </>
  );
}

export default App;
