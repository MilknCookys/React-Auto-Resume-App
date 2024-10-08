export default function ExperienceComponentForm({
  experienceComponent,
  handleExperienceComponents,
  formVisible,
}) {
  return (
    <form
      className={`educationComponentForm ${formVisible && "educationFormOpen"}`}
    >
      <div className="formRow">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          value={experienceComponent.company}
          onChange={handleExperienceComponents}
        />
      </div>

      <div className="formRow">
        <div className="formDates">
          <div className="startDate">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              value={experienceComponent.startDate}
              onChange={handleExperienceComponents}
            />
          </div>

          <div className="endDate">
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              id="endDate"
              value={experienceComponent.endDate}
              onChange={handleExperienceComponents}
            />
          </div>
        </div>
      </div>

      <div className="formRow">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={experienceComponent.role}
          onChange={handleExperienceComponents}
        />
      </div>
    </form>
  );
}
