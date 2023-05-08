import React, { useState, useEffect } from "react";

interface Anime {
  name: string;
  status: string;
}

export default function Anime(props: any) {
  const element: Anime = props.data;

  return (
    <div>
      <div>Name: {element.name}</div>
      <div>Status: {element.status}</div>
    </div>
  );
}
