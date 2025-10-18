import React, { useState, useEffect } from 'react';
import useApps from './hooks/useApps';
import AppCard from './AppCard';
import AppNotMatched from '../assets/App-Error.png';


const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchApps, setSearchApps] = useState([]);
  const [notMatched, setNotMatched] = useState(false);

  // Handle search
  useEffect(() => {
    const term = search.trim().toLowerCase();
    if (!loading) {
      const filteredApps = term
        ? apps.filter((app) => app.title.toLowerCase().includes(term))
        : apps;

      setSearchApps(filteredApps);
      setNotMatched(filteredApps.length === 0);
    }
  }, [search, apps, loading]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-11/12 mx-auto">
        <h1 className="text-4xl font-bold pt-10 text-center">
          Our All Applications
        </h1>
        <p className="text-gray-600 text-center mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {/* Search & Apps Found */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <h3 className="text-2xl font-bold">
            <span>{searchApps.length}</span> Apps Found
          </h3>

          <div className="w-full md:w-auto">
            <label className="input flex items-center border rounded px-2 py-1 w-full md:w-auto">
              <svg
                className="h-[1em] opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="outline-none w-full"
              />
            </label>
          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-10">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : notMatched ? (
          <div className="flex flex-col items-center py-10">
            <img src={AppNotMatched} alt="No Match Found" className="w-64 mb-4" />
            <p className="text-gray-600 text-lg font-semibold">No Apps Found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center py-4">
            {searchApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Apps;
