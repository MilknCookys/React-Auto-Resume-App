import { useState } from "react";
import "../styles/App.css";
import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";
import ResumeHeaderForm from "./ResumeHeaderForm";

function App() {
  const [fullName, setFullname] = useState("Paul");
  const [personalInformation, setPersonalInformation] = useState({
    fullName: "Full Name",
    email: "fake.email@gmail.com",
    phone: "0123 456 789",
    address: "123 Fake Road City",
  });

  function handlePersonalInfo(e) {
    console.log("Changing full name");
    console.log(e.target);
    // setFullname(e.target.value);
  }

  return (
    <>
      <section className="resumeForm">
        <ResumeHeaderForm
          personalInformation={personalInformation}
          handlePersonalInfoChange={handlePersonalInfo}
        />
      </section>
      <section className="resume">
        <ResumeHeader fullName={fullName} />
        <ResumeMain />
      </section>
    </>
  );
}

export default App;
