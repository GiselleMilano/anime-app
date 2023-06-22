import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Search() {
  const [results, setResults] = useState<String[]>([]);
  const [areResults, setAreResults] = useState(false);

  const findArray = [
    "primer resultado",
    "segundo resultado",
    "tercer resultado",
    "cuarto resultado",
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() != "") {
      if (findArray.length > 0) {
        setResults(findArray);
        setAreResults(true);
      }
    } else {
      setResults([]);
      setAreResults(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full h-full">
      <div
        className={`flex flex-row w-3/6 bg-neutral-600 justify-start py-2 ${
          areResults ? "rounded-t-lg" : "rounded-full"
        }`}
      >
        <div className="w-12 pl-2 flex justify-center items-center flex-col">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="w-full pr-8">
          <input
            onChange={handleChange}
            type="text"
            className="w-full bg-transparent focus:ring-0 focus:ring-offset-0 border-none !outline-none focus:border-transparent"
          ></input>
        </div>
      </div>
      {areResults ? (
        <div className="flex flex-row w-3/6 bg-neutral-600 justify-start py-2">
          <ul className="w-full">
            {results.map((e, index) => (
              <Link to={"/edit-anime/0"}>
                <li
                  key={index}
                  className="flex justify-start flex-row hover:bg-neutral-500 hover:rounded cursor:pointer"
                >
                  <div className="w-12 pl-2 flex justify-center items-center flex-col">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <div className="w-full pr-8">{e}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
      {areResults ? (
        <div className="flex flex-row w-3/6 bg-neutral-700 justify-start py-2 rounded-b-lg"></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
