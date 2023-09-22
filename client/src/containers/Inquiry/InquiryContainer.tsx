import * as React from "react";
import ContactForm from "@/components/Contact/ContactForm";

const InquiryContainer: React.FC = () => {
  return (
    <div className={"contactFormContainer"}>
      <h3 className={"contactFormTitle"}>inquiry</h3>
      <div className={"w-full md:w-auto"}>
        <ContactForm />
      </div>
    </div>
  );
};
export default InquiryContainer;
