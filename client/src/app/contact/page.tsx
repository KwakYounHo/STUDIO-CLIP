import * as React from "react";
import InquiryContainer from "@/containers/Inquiry/InquiryContainer";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";

export const metadata: Metadata = {
  title: constants.createTitle("Contact"),
};

const Contact: React.FC = () => {
  return (
    <main className={"w-screen flex flex-col justify-center items-center"}>
      <InquiryContainer />
    </main>
  );
};
export default Contact;
