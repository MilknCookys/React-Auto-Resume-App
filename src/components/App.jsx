import "../styles/App.css";
import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";
import ResumeHeaderForm from "./ResumeHeaderForm";

function App() {
  return (
    <>
      <section className="resumeForm">
        <ResumeHeaderForm />
      </section>
      <section className="resume">
        <ResumeHeader />
        <ResumeMain />
      </section>
    </>
  );
}

export default App;
