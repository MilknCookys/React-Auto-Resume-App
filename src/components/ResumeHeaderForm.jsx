export default function ResumeHeaderForm({ fullName, handleFullNameChange }) {
  return (
    <form>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={handleFullNameChange}
      />
    </form>
  );
}
