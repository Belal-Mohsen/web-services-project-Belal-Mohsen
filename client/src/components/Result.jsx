import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import mockData from './MockData';

  const Results = ({APIData}) => {
  const [results, setResults] = useState([]);
  const [ratingFilterOptions, setRatingFilterOptions] = useState({});
  const [distanceFilterOptions, setDistanceFilterOptions] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  console.log(APIData);
  let APIDataArray = Array.from(APIData?.data);

  useEffect(() => {
    if (APIDataArray) {
      setResults(APIDataArray);
    }
  }, [APIDataArray]); 

  if (!APIDataArray) {
    return <div>Loading...</div>;
  }
 
  const handleFilter = () => {
    return results.filter((result) => {
      const ratingMatch =
        Object.values(ratingFilterOptions).every((value) => !value) || 
        ratingFilterOptions[result.rating];

      const distanceMatch =
        distanceFilterOptions.length === 0 || 
        distanceFilterOptions.some((option) => result.distance <= option);

      return ratingMatch && distanceMatch;
    });
  };

  const totalPages = Math.ceil(handleFilter().length / resultsPerPage);
  const paginatedResults = handleFilter().slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const applyFilters = () => {
    const filteredResults = handleFilter();
    console.log(filteredResults);
    toggleFilterModal();
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const maxPageButtons = 5; 

    let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (totalPages <= maxPageButtons) 
    {
      startPage = 1;
    } 
    else if (endPage === totalPages)
     {
        startPage = Math.max(totalPages - maxPageButtons + 1, 1);
     }

    if (currentPage > 1) 
    {
      pages.push(
        <button
          key="back"
          onClick={() => goToPage(currentPage - 1)}
          className="mx-2 px-2 py-1 rounded bg-gray-300 text-gray-800"
        >
          Back
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`mx-2 px-2 py-1 rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => goToPage(currentPage + 1)}
          className="mx-2 px-2 py-1 rounded bg-gray-300 text-gray-800"
        >
          Next
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto sm:overflow-y-visible mt-8 mx-4 sm:mx-20">
      <div className="flex justify-between items-center mb-4 mt-20 mr-4">
       
        <button
          onClick={toggleFilterModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Filter
        </button>
       
      <div className="flex justify-center mt-4">
        {renderPagination()}
      </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {paginatedResults.map((result, index) => (
          <div key={index} className="mb-4">
            <ResultCard
              name={result?.name}
              rating={result?.rating}
              address={result?.address}
              distance={result?.distance}
              webURL={result?.website}
              imageSrc={result?.photo}
            />
          </div>
        ))}
      </div>

      {showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-2xl font-medium mb-4">Filter Options</h2>
            <div className="mb-4 text-black">
              <h3 className="text-lg font-medium mb-2">Rating:</h3>
              {['A', 'B', 'C'].map((rating) => (
                <label key={rating} className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={ratingFilterOptions[rating]}
                    onChange={() =>
                      setRatingFilterOptions({
                        ...ratingFilterOptions,
                        [rating]: !ratingFilterOptions[rating],
                      })
                    }
                  />
                  <span>{rating}</span>
                </label>
              ))}
            </div>

            <div className="mb-4 text-black">
                  <h3 className="text-lg font-medium mb-2">Distance (miles)</h3>
                  {[50, 100, 150, 200, 250, 300].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        value={option.toString()}
                        checked={distanceFilterOptions.includes(option)}
                        onChange={(e) => {
                          const optionValue = option;
                          setDistanceFilterOptions((prevOptions) => {
                            if (prevOptions.includes(optionValue)) {
                              return prevOptions.filter((o) => o !== optionValue);
                            } else {
                              return [...prevOptions, optionValue];
                            }
                          });
                        }}
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
            </div>
            <div className="mt-4 flex justify-between">
                    <button
                      onClick={applyFilters}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                    >
                      Apply Filters
                    </button>
                    <button
                      onClick={toggleFilterModal}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;