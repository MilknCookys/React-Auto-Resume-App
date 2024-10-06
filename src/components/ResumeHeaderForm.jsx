import ResumeHeader from "./ResumeHeader";

export default function ResumeHeaderForm() {
  console.log("Hello World!");

  const fullName = "Jett Baker";
  const email = "jett.p.baker@gmail.com";
  const phone = "0474 648 098";
  const address = "163 Newman Road Geebung";

  ResumeHeader(fullName, email, phone, address);
}

ResumeHeaderForm();
