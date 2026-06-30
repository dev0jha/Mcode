"use client";

import React, { useEffect, useState } from "react";

export default function AutoSearch() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    {
      /* Fix cache issue no api calls    */
    }
    async function fetchRecipes() {
      if (cache[input]) {
        console.log("Cache returned :", input);
        setRecipes(cache[input]);
        return;
      }
      try {
        console.log("API called", input); // their is an error where api called repeatedly
        const res = await fetch(
          `https://dummyjson.com/recipes/search?q=${input}`
        );

        const data = await res.json();
        setRecipes(data.recipes);
        setCache((prev) => ({ ...prev, [input]: data.recipes }));
      } catch (error) {
        console.error(error);
      }
    }

    {
      /* Use Debouncing to Prevent API Call Opitimazation   */
    }
    const timer = setTimeout(() => {
      fetchRecipes();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input, cache]);

  return (
    <div className="flex flex-col items-center pt-50">
      <h1 className="rounded-md border border-dashed bg-amber-300 px-4 py-2 text-3xl font-bold">
        Auto Search Bar
      </h1>

      <div className="relative mt-6 w-96">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        />

        {visible && (
          <div className="absolute mt-1 max-h-72 w-full overflow-y-auto rounded-md border bg-white shadow-lg">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="cursor-pointer border-b p-3 hover:bg-amber-200"
              >
                {recipe.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
