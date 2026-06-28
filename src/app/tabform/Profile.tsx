import React from "react";
import type { Data } from "./page";
type ProfileProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

export default function Profile({ data, setData }: ProfileProps) {
  const { name, age, email } = data;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="w-20">Name :</label>
        <input
          value={name}
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="flex-1 border border-gray-400 px-2 py-1"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="w-20">Age :</label>
        <input
          value={age}
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
          className="flex-1 border border-gray-400 px-2 py-1"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="w-20">Email :</label>
        <input
          value={email}
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="flex-1 border border-gray-400 px-2 py-1"
        />
      </div>
    </div>
  );
}
