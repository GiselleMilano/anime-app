import React, { ChangeEvent, useEffect, useState } from "react";
import Status from "../types/status";

export default function SelectStatus(props.animeStatus: Status | null) {
  const AnimeStatusValue : Status = props.animeStatus;
  const [options, setOptions] = useState<Status[] | null>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const callback = async () => {
      const res = await fetch("http://localhost:3000/status");
      const json = await res.json();
      setOptions(json);
      if (AnimeStatusValue) {
        setValue(AnimeStatusValue);
      }
    };

    callback();
  }, []);

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <select
      className="bg-neutral-600 cursor-pointer"
      id="selectStatus"
      value={value}
      onChange={onSelectChange}
    >
      <option value={0}>Select</option>
      {options!.map((option) => (
        <option value={option.id}>{option.label}</option>
      ))}
    </select>
  );
}
