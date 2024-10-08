import EducationComponent from "./EducationComponent";
import "../styles/EducationComponent.css";

export default function EducationFormDropDownContent({
  educationComponents,
  handleEducationComponents,
  deleteEducationComponent,
  newEducationComponent,
}) {
  return (
    <>
      {educationComponents.map((component) => {
        return (
          <EducationComponent
            key={component.key}
            id={component.key}
            educationComponent={component}
            handleEducationComponents={handleEducationComponents}
            deleteEducationComponent={deleteEducationComponent}
          />
        );
      })}
      <button className="newEducationComponent" onClick={newEducationComponent}>
        New
      </button>
    </>
  );
}
