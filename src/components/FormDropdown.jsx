import "../styles/FormDropDown.css";

export default function FormDropDown({
  mainIcon,
  headerText,
  isOpen,
  setOpenForm,
  DropDownContent,
  educationComponents,
  handleEducationComponents,
  deleteEducationComponent,
  newEducationComponent,
}) {
  return (
    <div className={`formDropDown ${isOpen ? "open" : null}`}>
      <div className="formDropDownHeader">
        <>{mainIcon}</>

        <h1>{headerText}</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`dropDownIcon ${isOpen && "rotated"}`}
          id="1"
          onClick={setOpenForm}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className={`formDropDownContent ${isOpen ? "open" : "closed"}`}>
        <DropDownContent
          educationComponents={educationComponents}
          handleEducationComponents={handleEducationComponents}
          deleteEducationComponent={deleteEducationComponent}
          newEducationComponent={newEducationComponent}
        />
      </div>
    </div>
  );
}
