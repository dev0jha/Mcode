import React from "react";
import type { Data, ErrorType } from "./page";

type ProfileProps = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  error: ErrorType;
};

export default function Profile({ data, setData, error }: ProfileProps) {
  const { name, age, email } = data;

  return (
    <div className="space-y-4">
      {/* Name */}
      <div className="flex items-start gap-3">
        <label className="w-20 pt-2">Name :</label>

        <div className="flex-1">
          <input
            value={name}
            type="text"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full rounded border border-gray-400 px-2 py-1"
          />

          {error.name && (
            <span className="mt-1 block text-sm text-red-500">
              {error.name}
            </span>
          )}
        </div>
      </div>

      {/* Age */}
      <div className="flex items-start gap-3">
        <label className="w-20 pt-2">Age :</label>

        <div className="flex-1">
          <input
            value={age}
            type="text"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
            className="w-full rounded border border-gray-400 px-2 py-1"
          />
           {error.age && (
            <span className="mt-1 block text-sm text-red-500">
              {error.age}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <label className="w-20 pt-2">Email :</label>

        <div className="flex-1">
          <input
            value={email}
            type="email"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="w-full rounded border border-gray-400 px-2 py-1"
          />
           {error.email && (
            <span className="mt-1 block text-sm text-red-500">
              {error.email}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
