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
};

type TabComponent = React.ComponentType<{ data: Data; setData: React.Dispatch<React.SetStateAction<Data>> }>;

export default function TabMenu() {
  const [data, setData] = useState<Data>({
    name: "Dev Hari Ojha",
    age: "21",
    email: "ojha6773@gmail.com",
    interest: ["coding", "music", "movies"],
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

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="flex">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer border border-dashed px-6 py-2 font-bold transition-colors ${
              activeTab === index
                ? "bg-amber-300"
                : "bg-amber-100 hover:bg-amber-200"
            }`}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="mt-2 min-h-50 w-125 border border-black p-4">
        <ActiveTabComponent data={data} setData={setData}/>
      </div>
    </div>
  );
}
