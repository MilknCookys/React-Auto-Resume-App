import "../styles/ResumeHeaderForm.css";

export default function ResumeHeaderForm({
  personalInformation,
  handlePersonalInfo,
  isActive,
  changeActiveForm,
}) {
  return (
    <form>
      <header className="formHeader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mainHeaderIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>

        <h2>Personal Information</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`dropDownIcon ${isActive ? "rotated" : null}`}
          id={0}
          onClick={changeActiveForm}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </header>

      <section className={`inputs ${isActive ? null : "hidden"}`}>
        <div className="inputSection">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={personalInformation.fullName}
            onChange={handlePersonalInfo}
          />
        </div>

        <div className="inputSection">
          <label htmlFor="fullName">Email</label>
          <input
            type="email"
            id="email"
            value={personalInformation.email}
            onChange={handlePersonalInfo}
          />
        </div>

        <div className="inputSection">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={personalInformation.phone}
            onChange={handlePersonalInfo}
          />
        </div>

        <div className="inputSection">
          <label htmlFor="address">Home Address</label>
          <input
            type="text"
            id="address"
            value={personalInformation.address}
            onChange={handlePersonalInfo}
          />
        </div>
      </section>
    </form>
  );
}
