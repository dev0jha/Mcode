"use client";

import React from "react";
import type { Data, ErrorType } from "./page";

type InterestProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  error: ErrorType;
  setError: React.Dispatch<React.SetStateAction<ErrorType>>;
};

export default function Interest({
  data,
  setData,
  error,
  setError,
}: InterestProps) {
  const { interest } = data;

  const handleInterest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    let updatedInterest: string[];

    if (checked) {
      updatedInterest = [...interest, name];
    } else {
      updatedInterest = interest.filter((item) => item !== name);
    }

    setData((prev) => ({
      ...prev,
      interest: updatedInterest,
    }));

    if (updatedInterest.length === 0) {
      setError((prev) => ({
        ...prev,
        interest: "Select at least one interest",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        interest: "",
      }));
    }
  };

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="coding"
          checked={interest.includes("coding")}
          onChange={handleInterest}
        />
        Coding
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="music"
          checked={interest.includes("music")}
          onChange={handleInterest}
        />
        Music
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="movies"
          checked={interest.includes("movies")}
          onChange={handleInterest}
        />
        Movies
      </label>

      {error.interest && (
        <p className="text-sm text-red-500">{error.interest}</p>
      )}
    </div>
  );
}
