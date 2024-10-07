export default function ResumeHeader({ personalInformation }) {
  return (
    <header className="resumeHeader">
      <h1>{personalInformation.fullName}</h1>
      <section className="contactDetails">
        <h3>{personalInformation.email}</h3>
        <h3>{personalInformation.phone}</h3>
        <h3>{personalInformation.address}</h3>
      </section>
    </header>
  );
}
