import React from "react";
import Category from "../types/category";

interface Props {
  categories: Category[];
}

export default function ListCategories(props: Props) {
  return (
    <ul className="mt-2 pl-2">
      {props.categories != null ? (
        props.categories!.map((c: Category) => {
          return (
            <li key={c.id} className="inline-block mb-2 mr-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {c.label}
              </span>
            </li>
          );
        })
      ) : (
        <li></li>
      )}
    </ul>
  );
}
