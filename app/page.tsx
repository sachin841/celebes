"use client"
import { useState } from "react";
import { CelebrityCard } from "@/components/CelebrityCard";
import { celebs } from "@/types/data";

const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(celebs.length / ITEMS_PER_PAGE);

  // Calculate the items for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = celebs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Celebrity Net Worth</h1>

      {/* Grid of Items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((celebrity) => (
          <CelebrityCard key={celebrity.name} celebrity={celebrity} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
