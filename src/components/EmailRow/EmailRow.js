import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import "./EmailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <CheckBoxOutlineBlankIcon />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <div className="emailRow-time">{time}</div>
    </div>
  );
};

export default EmailRow;
