import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../firebase/firebase";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage);
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail-close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail-error">To field is required</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail-error">Subject field is required</p>
        )}
        <textarea
          cols="10"
          rows="4"
          type="text"
          placeholder="Message"
          className="sendMail-message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="sendMail-error">Message field is required</p>
        )}
        <div className="sendMail-options">
          <Button
            className="sendMail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
