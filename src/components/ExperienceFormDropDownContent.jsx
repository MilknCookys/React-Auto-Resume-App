import ExperienceComponent from "./ExperienceComponent";

export default function ExperienceFormDropDownContent({
  experienceComponents,
  handleExperienceComponents,
  deleteExperienceComponent,
  newExperienceComponent,
}) {
  return (
    <>
      {experienceComponents.map((component) => {
        return (
          <ExperienceComponent
            key={component.key}
            id={component.key}
            experienceComponent={component}
            handleExperienceComponents={handleExperienceComponents}
            deleteExperienceComponents={deleteExperienceComponent}
          />
        );
      })}
      <button
        className="newEducationComponent"
        onClick={newExperienceComponent}
      >
        New
      </button>
    </>
  );
}
