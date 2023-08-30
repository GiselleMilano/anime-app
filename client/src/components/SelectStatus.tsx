import React, { ChangeEvent, useEffect, useState } from "react";
import Status from "../types/status";

interface Props {
  currentValue: number;
  options: Status[];
  onChange: (value: number) => void;
}

export default function SelectStatus(props: Props) {
  const options: Status[] = props.options;

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(Number(event.target.value));
  };

  if (options == null) {
    return (
      <select className="bg-neutral-600 cursor-pointer">
        <option>Select</option>
      </select>
    );
  }

  return (
    <select
      className="bg-neutral-600 cursor-pointer"
      id="selectStatus"
      value={props.currentValue}
      onChange={onChange}
    >
      <option value={0}>Select</option>

      {options.map(function (option, i) {
        let text = option.label;

        if (option.label == "in_progress") {
          text = "In Progress";
        } else if (option.label == "listed") {
          text = "Listed";
        } else if (option.label == "completed") {
          text = "Completed";
        }

        return <option value={option.id}>{text}</option>;
      })}
    </select>
  );
}
