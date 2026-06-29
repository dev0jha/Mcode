"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;
const API_URL = "https://dummyjson.com/products?limit=100";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  const noOfPages = Math.ceil(products.length / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginatedProducts = products.slice(start, end);

  let startPage = currentPage;
  let endPage = currentPage + 3;

  if (endPage >= noOfPages) {
    endPage = noOfPages - 1;
    startPage = Math.max(0, endPage - 3);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border-2 border-dotted bg-amber-200 p-3"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={150}
              className="h-32 w-full rounded-md object-cover"
            />

            <h2 className="mt-2 line-clamp-2 text-sm font-semibold">
              {product.title}
            </h2>

            <p className="mt-1 text-lg font-bold text-green-600">
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {/* Previous */}
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="border-2 border-dashed px-4 py-2 bg-zinc-400"
          >
            Prev
          </button>
        )}

        {/* Dynamic Page Numbers */}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`h-10 w-10 rounded-md border transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page + 1}
          </button>
        ))}

        {/* Next */}
        {currentPage < noOfPages - 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="border-2 border-dashed px-4 py-2 bg-pink-400"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
