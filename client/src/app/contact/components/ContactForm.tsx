"use client";
import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

import {
  SendMailLoading,
  SendMailSuccess,
} from "@/app/contact/Adapter/SendingModal";

type ContactInputType = {
  title: string;
  team: string;
  mobileNum: number | null;
  messenger: string;
  messengerPlatform: string;
  e_mail: string;
  body: string;
};

const scriptURL: string =
  "https://script.google.com/macros/s/AKfycbzxRCYD7_JsQA5n2AMoosoO8wWmIkMRy0ZLjhglYm4pM_fR9NXAPYWLihnQb6xmWomk/exec";

//! component start
const ContactForm: React.FC = () => {
  // management state
  const [activeSend, setActiveSend] = React.useState<boolean>(false);
  const [sendMailSuccess, setSendMailSuccess] = React.useState<boolean>(false);

  // react-hook-form config
  const {
    register,
    handleSubmit, // for input onSubmit's callback function
    watch, // watch input's value
    formState: { errors },
    control, // for Controller Container
    setValue, // setting value under specific conditions
    clearErrors, // clear errors when specific conditions
    reset, // reset value at input
  } = useForm<ContactInputType>();

  // when email sent, clear value
  const clearInput = React.useCallback(() => {
    reset({
      title: "",
      team: "",
      mobileNum: null,
      messenger: "",
      messengerPlatform: "",
      e_mail: "",
      body: "",
    });
  }, [reset]);

  // submit handler
  const contactOnSubmit: SubmitHandler<ContactInputType> = async (data) => {
    // loading toast generate
    const loadingToast = toast.loading("Sending email...");
    // already active send
    if (activeSend === true) {
      toast.dismiss(loadingToast);
      toast("Email is already being sent", {
        icon: "⚠️",
      });
      return;
    }
    try {
      setActiveSend(true);
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(data as any).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // result response
      if (response.ok) {
        console.log("Form successfully submitted");
        toast.dismiss(loadingToast);
        toast.success("Eamil sent");
        setActiveSend(false);
        setSendMailSuccess(true);
        clearInput();
        //! successfully send
      } else {
        console.error("Form submission error", response);
        toast.dismiss(loadingToast);
        setActiveSend(false);
        toast.dismiss(loadingToast);
        toast.error("An error occurred\nPlease inquiry manager");
        //! Failed to send
      }
    } catch (error) {
      console.error("Network error", error);
      setActiveSend(false);
      toast.dismiss(loadingToast);
      toast.error("An error occurred\nPlease inquiry manager");
      //! Failed to send
    }
  };

  // watch value that messenger id input
  const messengerValue = watch("messenger");

  // if messenger id is null, clear input value
  React.useEffect(() => {
    if (!messengerValue) {
      setValue("messengerPlatform", ""); // if messengerValue is none, clear messenger platform input's value
      if (errors.messengerPlatform) {
        clearErrors("messengerPlatform");
      }
    }
  }, [messengerValue, errors.messengerPlatform, clearErrors, setValue]);

  //! form start
  return (
    <>
      {activeSend && <SendMailLoading />}
      {sendMailSuccess && <SendMailSuccess sendState={setSendMailSuccess} />}
      <form
        className={"contactForm gform"}
        onSubmit={handleSubmit(contactOnSubmit)}
      >
        {/* Title */}
        <div className={"flex flex-col gap-2"}>
          <label className={"required-input"}>title</label>
          <input
            {...register("title", { required: true })}
            className={"w-full"}
          />
          {errors.title && (
            <span className={"invalidData"}>Title is required</span>
          )}
        </div>
        {/* information */}
        <div className={" w-full grid lg:grid-cols-2 gap-4"}>
          <div className={"formBox"}>
            {/* team */}
            <label>team</label>
            <input {...register("team")} />
          </div>
          <div className={"formBox"}>
            {/* mobile number */}
            <label className={"required-input"}>mobile number</label>
            <input
              type="number"
              placeholder="Enter numbers only"
              {...register("mobileNum", { required: true })}
            />
            {errors.mobileNum && (
              <span className={"invalidData"}>mobile number is required</span>
            )}
          </div>
          <div className={"formSubBox"}>
            <div className={"formSubBoxWrapper"}>
              {/* messenger id */}
              <label>messenger id</label>
              <input {...register("messenger")} />
            </div>
            <div
              className={`formSubBoxWrapper ${
                !messengerValue ? "disabledInput" : ""
              }`}
            >
              {/* messenger platform */}
              <label>messenger platform</label>
              <Controller
                name="messengerPlatform"
                control={control}
                defaultValue=""
                rules={{ required: messengerValue ? true : false }}
                render={({ field }) => (
                  <input {...field} disabled={!messengerValue} />
                )}
              />
              {errors.messengerPlatform && (
                <span className={"invalidData"}>
                  If you input the messenger ID,
                  <br />
                  messenger platform is required
                </span>
              )}
            </div>
          </div>
          <div className={"formBox"}>
            {/* e-mail */}
            <label>e-mail</label>
            <input
              type="email"
              {...register("e_mail", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.e_mail && (
              <span className="invalidData">{errors.e_mail.message}</span>
            )}
          </div>
        </div>
        {/* body */}
        <div className={"flex flex-col gap-2"}>
          <label className={"required-input"}>Details</label>
          <textarea
            {...register("body", { required: true })}
            className={"w-full h-60 resize-none p-1"}
            placeholder="(*) is required input"
          />
          {errors.body && (
            <span className={"invalidData"}>Detail is required</span>
          )}
        </div>
        {/* submit */}
        <button
          type="submit"
          className={
            "bg-menu-bg p-1 w-full mt-2 hover:bg-menu-bg/50 hover:text-content-text rounded-lg"
          }
        >
          Send
        </button>
      </form>
    </>
  );
};
export default ContactForm;
