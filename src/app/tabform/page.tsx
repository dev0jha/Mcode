"use client";

import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

export type Data = {
  name: string;
  age: string;
  email: string;
  interest: string[];
  theme: "light" | "dark";
};

export type ErrorType = {
  name: string;
  age: string;
  email: string;
  interest: string;
};

type TabProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  error: ErrorType;
  setError: React.Dispatch<React.SetStateAction<ErrorType>>;
};

type TabComponent = React.ComponentType<TabProps>;

export default function TabMenu() {
  const [data, setData] = useState<Data>({
    name: "Dev Hari Ojha",
    age: "21",
    email: "ojha6773@gmail.com",
    interest: ["coding", "music", "movies"],
    theme: "light",
  });

  const [error, setError] = useState<ErrorType>({
    name: "",
    age: "",
    email: "",
    interest: "",
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs: { name: string; component: TabComponent }[] = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const validate = () => {
    const newError: ErrorType = {
      name: "",
      age: "",
      email: "",
      interest: "",
    };

    let isValid = true;

    if (activeTab === 0) {
      if (!data.name.trim()) {
        newError.name = "Name is required";
        isValid = false;
      }

      if (!data.age.trim()) {
        newError.age = "Age is required";
        isValid = false;
      }

      if (!data.email.trim()) {
        newError.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        newError.email = "Invalid email";
        isValid = false;
      }
    }

    if (activeTab === 1) {
      if (data.interest.length === 0) {
        newError.interest = "Select at least one interest";
        isValid = false;
      }
    }

    setError(newError);
    return isValid;
  };

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="flex flex-col items-center justify-center pt-40">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer border border-dashed px-6 py-2 font-bold ${
              activeTab === index
                ? "bg-amber-300"
                : "bg-amber-100 hover:bg-amber-200"
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Active Component */}
      <div className="mt-2 min-h-[250px] w-[500px] border border-black p-4">
        <ActiveTabComponent
          data={data}
          setData={setData}
          error={error}
          setError={setError}
        />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        {activeTab > 0 && (
          <button
            onClick={() => setActiveTab(activeTab - 1)}
            className="rounded bg-zinc-600 px-4 py-2 text-white"
          >
            Prev
          </button>
        )}

        {activeTab < tabs.length - 1 && (
          <button
            onClick={() => {
              if (validate()) {
                setActiveTab(activeTab + 1);
              }
            }}
            className="rounded bg-pink-400 px-4 py-2"
          >
            Next
          </button>
        )}

        {activeTab === tabs.length - 1 && (
          <button
            onClick={() => {
              if (validate()) {
                console.log(data);
                alert("Form Submitted Successfully");
              }
            }}
            className="rounded bg-sky-600 px-4 py-2 text-white"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
