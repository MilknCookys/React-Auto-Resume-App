export default function EducationFormDropDownContent() {
  return (
    <form className="dropDownForm">
      <div className="formRow">
        <label htmlFor="school">School</label>
        <input type="text" id="school" />
      </div>

      <div className="formRow">
        <div className="formDates">
          <div className="startDate">
            <label htmlFor="startDate">Start Date</label>
            <input type="text" id="startDate" />
          </div>

          <div className="endDate">
            <label htmlFor="endDate">End Date</label>
            <input type="text" id="endDate" />
          </div>
        </div>
      </div>

      <div className="formRow">
        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" />
      </div>
    </form>
  );
}
