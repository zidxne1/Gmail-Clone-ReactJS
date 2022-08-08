import { LabelImportantOutlined } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title"></div>
      <div className="emailRow__message"></div>
      <div className="emailRow__description"></div>
    </div>
  );
}

export default EmailRow;
