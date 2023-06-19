import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AddAnimes() {
  return (
    <div className="flex justify-center w-full h-full pt-16">
      <div className="flex flex-row w-3/5 bg-neutral-700 rounded-full justify-start py-4">
        <div className="w-12 pl-2 flex justify-center items-center flex-col">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="w-full pr-8">
          <input className="w-full bg-transparent focus:bg-neutral-700 active:bg-neutral-700 hover:bg-neutral-700"></input>
        </div>
      </div>
    </div>
  );
}
