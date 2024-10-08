import { useState } from "react";
import ExperienceComponentForm from "./ExperienceComponentForm";

function Icons({ toggleFormVisible, deleteExperienceComponent }) {
  return (
    <div className="experienceComponentIcons">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="deleteIcon"
        onClick={deleteExperienceComponent}
      >
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="editIcon"
        onClick={toggleFormVisible}
      >
        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
      </svg>
    </div>
  );
}

export default function ExperienceComponent({
  experienceComponent,
  handleExperienceComponents,
  deleteExperienceComponent,
}) {
  const [formVisible, setFormVisible] = useState(false);

  function toggleFormVisible() {
    setFormVisible(!formVisible);
  }

  return (
    <div className="experienceComponent" id={experienceComponent.key}>
      <div className="experienceComponentLabel">
        <h2>{experienceComponent.company}</h2>
        <Icons
          experienceComponent={experienceComponent}
          toggleFormVisible={toggleFormVisible}
          deleteExperienceComponent={deleteExperienceComponent}
        />
      </div>
      <ExperienceComponentForm
        experienceComponent={experienceComponent}
        handleExperienceComponents={handleExperienceComponents}
        formVisible={formVisible}
      />
    </div>
  );
}
