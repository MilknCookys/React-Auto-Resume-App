export default function EducationComponentForm({
  educationComponent,
  handleEducationComponents,
  formVisible,
}) {
  return (
    <form
      className={`educationComponentForm ${formVisible && "educationFormOpen"}`}
    >
      <div className="formRow">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          value={educationComponent.school}
          onChange={handleEducationComponents}
        />
      </div>

      <div className="formRow">
        <div className="formDates">
          <div className="startDate">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              value={educationComponent.startDate}
              onChange={handleEducationComponents}
            />
          </div>

          <div className="endDate">
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              id="endDate"
              value={educationComponent.endDate}
              onChange={handleEducationComponents}
            />
          </div>
        </div>
      </div>

      <div className="formRow">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          value={educationComponent.degree}
          onChange={handleEducationComponents}
        />
      </div>
    </form>
  );
}
