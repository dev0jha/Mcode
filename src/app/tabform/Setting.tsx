"use client";

import React from "react";
import type { Data } from "./page";

type SettingProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

export default function Setting({ data, setData }: SettingProps) {
  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.value as "light" | "dark",
    }));
  };

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={data.theme === "light"}
          onChange={handleTheme}
        />
        Light
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={data.theme === "dark"}
          onChange={handleTheme}
        />
        Dark
      </label>
    </div>
  );
}
