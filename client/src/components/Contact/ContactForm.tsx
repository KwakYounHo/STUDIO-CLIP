"use client";
import * as React from "react";

const ContactForm: React.FC = () => {
  const [messengerDetail, setMessengerDetail] = React.useState<string>("");
  const messengerPlatformInput = React.useRef<HTMLInputElement>(null);
  const messengerInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessengerDetail(e.target.value)
  }
  React.useEffect(()=>{
    if (messengerPlatformInput.current !== null) {
      if (messengerDetail !== "") {
        messengerPlatformInput.current.disabled = false;
      } else {
        messengerPlatformInput.current.value = "";
        messengerPlatformInput.current.disabled = true;
      }
    }
  }, [messengerDetail])
  const ABCTEST = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.title)
  }
  return (
    <form className={"contactForm"} action={"#"} method={"POST"} onSubmit={ABCTEST}>
      {/* Title */}
      <div>
        <label htmlFor="inqTitle" className={'required-input'}>title</label>
        <input
          type="text"
          id={"inqTitle"}
          name="title"
          className={"w-full"}
          title="title"
        />
      </div>
      {/* information */}
      <div
        className={" w-full grid grid-cols-2 gap-4"}
      >
        <div className={"formBox"}>
          <label htmlFor="team">team</label>
          <input type="text" id="team" name="team" />
        </div>
        <div className={"formBox"}>
          <label htmlFor="mobileNum" className={"required-input"}>
            mobile number
          </label>
          <input type="number" id="mobileNum" name="mobileNum" />
        </div>
        <div className={"formSubBox"}>
          <div className={"formSubBoxWrapper"}>
            <label htmlFor="messenger">messenger id</label>
            <input type="text" id="messenger" name="messenger" onChange={messengerInputHandler} />
          </div>
          <div className={`formSubBoxWrapper ${(messengerDetail === "")? "opacity-50":"opacity-100"}`}>
            <label htmlFor="messengerPlatform">messenger platform</label>
            <input type="text" id="messengerPlatform" name="messengerPlatform" ref={messengerPlatformInput} disabled />
          </div>
        </div>
        <div className={"formBox"}>
          <label htmlFor="e-mail">e-mail</label>
          <input type="email" id="e-mail" name="e-mail" />
        </div>
      </div>
      {/* body */}
      <div>
        <label htmlFor="inquiryDetail" className={"required-input"}>
          Details
        </label>
        <textarea
          name="body"
          id="inquiryDetail"
          className={"w-full h-60 resize-none p-1"}
          placeholder="(*)표시가 있는 항목은 필수로 입력해야 합니다)"
        />
        {/* submit */}
        <button type="submit" className={"bg-menu-bg p-1 w-full mt-2"}>
          Send
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
