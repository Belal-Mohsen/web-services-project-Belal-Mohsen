import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
//import mockData from './MockData';

  const Results = ({APIData}) => {
  const [results, setResults] = useState([]);
  const [ratingFilterOptions, setRatingFilterOptions] = useState([false, false, false, false]);
  const [distanceFilterOptions, setDistanceFilterOptions] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const resultsPerPage = 12;
  
  let APIDataArray = Array.from(APIData?.data);
  //console.log(APIData);

  useEffect(() => {
    // Fetch data from an API or set it to your mock data
    setResults(APIDataArray); // Replace with API fetch logic when ready
  }, []);

  // useEffect(() => {
  //   if (APIDataArray) {
  //     setResults(APIDataArray);
  //   }
  // }, [APIDataArray]); 

  // if (!APIDataArray) {
  //   return <div>Loading...</div>;
  // }
  const getTopRatedResorts = (data) => {
    return data
      .filter(resort => Boolean(resort.rating))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  };

  const topResorts = getTopRatedResorts(APIData?.data || []);

  const handleFilter = () => {
    return results.filter((result) => {
      const rating = result.rating;
      

      if (ratingFilterOptions[0]) {
        return rating !== null && rating < 3;
      } else if (ratingFilterOptions[1]) {
        return rating !== null && rating >= 3 && rating <= 4;
      } else if (ratingFilterOptions[2]) {
        return rating !== null && rating > 4;
      }
      return true; 
      // const distanceMatch =
      //   distanceFilterOptions.length === 0 ||
      //   distanceFilterOptions.some((option) => result.distance <= option);

      //return ratingMatch && distanceMatch;
    });
  };

  // const totalPages = Math.ceil(handleFilter().length / resultsPerPage);
  // const paginatedResults = handleFilter().slice(
  //   (currentPage - 1) * resultsPerPage,
  //   currentPage * resultsPerPage
  // );

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const applyFilters = () => {
   handleFilter();
    //console.log(filteredResults);
    toggleFilterModal();
  };

  // const goToPage = (page) => {
  //   setCurrentPage(page);
  // };

  // const renderPagination = () => {
  //   const pages = [];
  //   const maxPageButtons = 5; 

  //   let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
  //   const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  //   if (totalPages <= maxPageButtons) 
  //   {
  //     startPage = 1;
  //   } 
  //   else if (endPage === totalPages)
  //   {
  //     startPage = Math.max(totalPages - maxPageButtons + 1, 1);
  //   }

  //   if (currentPage > 1) 
  //   {
  //     pages.push(
  //       <button
  //         key="back"
  //         onClick={() => goToPage(currentPage - 1)}
  //         className="mx-2 px-2 py-1 rounded bg-gray-300 text-gray-800"
  //       >
  //         Back
  //       </button>
  //     );
  //   }

  //   for (let i = startPage; i <= endPage; i++)
  //   {
  //     pages.push(
  //       <button
  //         key={i}
  //         onClick={() => goToPage(i)}
  //         className={`mx-2 px-2 py-1 rounded ${
  //           i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
  //         }`}
  //       >
  //         {i}
  //       </button>
  //     );
  //   }

  //   if (currentPage < totalPages) 
  //   {
  //     pages.push(
  //       <button
  //         key="next"
  //         onClick={() => goToPage(currentPage + 1)}
  //         className="mx-2 px-2 py-1 rounded bg-gray-300 text-gray-800"
  //       >
  //         Next
  //       </button>
  //     );
  //   }

  //   return pages;
  // };

  return (
    <div className="max-h-[80vh] overflow-y-auto sm:overflow-y-visible mt-14 mx-4 sm:mx-20">
      <div className="flex justify-between items-center mb-4 mt-20 mr-4">
      
        <button
          onClick={toggleFilterModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Filter
        </button>
      {/* <div className="flex justify-center mt-4">
        {renderPagination()}
      </div> */}
      </div>
      <div className="top-rated-section mb-8 flex flex-col items-center">
          <h2 className="text-6xl font-medium mb-4">Top Ski Resorts</h2>
          <div className="flex flex-wrap gap-10 justify-center">
              {topResorts.map((resort, index) => (
                <div key={index} className="mb-4">
                  <ResultCard APIsData={resort} />
                </div>
              ))}
          </div>
      </div>

      

      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-6xl font-medium mb-4">All Ski Resorts</h2>
        <div className="flex flex-wrap gap-10 justify-center">      
        {handleFilter().map((result, index) => (
          <div key={index} className="mb-4">
            <ResultCard APIsData = {result}
            />
          </div>
        ))}
      </div>
      </div>

      {showFilterModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-2xl font-medium mb-4">Filter Options</h2>
            <div className="mb-4 text-black">
              <h3 className="text-lg font-medium mb-2">Rating:</h3>
              {['Less than 3', '3-4', 'More than 4'].map((rating, index) => (
                <label key={index} className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox ml-6"
                    checked={ratingFilterOptions[index]}
                    onChange={() => {
                      const updatedOptions = [...ratingFilterOptions];
                      updatedOptions[index] = !updatedOptions[index];
                      setRatingFilterOptions(updatedOptions);
                    }}
                  />
                  <span>{rating}</span>
                </label>
              ))}
            </div>

            <div className="mb-4 text-black">
                  <h3 className="text-lg font-medium mb-2">Distance (kilometers)</h3>
                  {[25, 50, 75, 100, 150, 200, 250, 300].map((option) => (
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
                onClick={toggleFilterModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={toggleFilterModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;