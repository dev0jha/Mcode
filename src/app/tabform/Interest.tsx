import React from "react";
import type { Data } from "./page";

type InterestProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

export default function Interest({ data, setData }: InterestProps) {
  return <div></div>;
}
