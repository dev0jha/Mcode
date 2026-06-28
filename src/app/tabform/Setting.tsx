import React from "react";
import type { Data } from "./page";

type SettingProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

export default function Setting({ data, setData }: SettingProps) {
  return <div>Hello</div>;
}
