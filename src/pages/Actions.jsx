import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import ActionTable from "./ActionTable";
import { getPort } from "@plasmohq/messaging/port";
import Paginate from "../components/Datatables/Paginate";

function Actions() {
  const [sidebarToggle] = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [field, setField] = useState(""); 
  const [direction, setDirection] = useState("");

  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    // Fetch action data from Firebase
    const getAllActionsPort = getPort("getAllActions");
    getAllActionsPort.postMessage({});
    const unsubscribe = getAllActionsPort.onMessage.addListener(function (res) {
      const allData = [...res["query"], ...res["quote"]];
      setData(allData);
      setLoading(false);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const dataHeader = [
    {
      key: "type",
      label: "Type",
      sort: true,
    },
    {
      key: "url",
      label: "URL",
      sort: true,
    },
    {
      key: "query",
      label: "Query",
      sort: true,
    },
    {
      key: "quoted",
      label: "Quoted",
      sort: true,
    },
    {
      key: "time",
      label: "Time",
      sort: true,
    },
    {
      key: "",
      label: "",
      sort: false,
    },
  ];

  const handleDelete = () => {};
  const handleSort = (tkey, currentDirection) => {
    if (field === tkey) {
      setDirection(currentDirection === "asc" ? "desc" : "asc");
    } else {
      setField(tkey);
      setDirection("asc");
    }
  };
  
  // Check if data is null to avoid "TypeError"
  if (data === null) {
    return (
    <div className="h-screen flex items-center justify-center">
      <div className="loading-spinner"></div>
    </div>)
  }

  // Calculate the total number of pages based on the number of data items
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, endIndex);
  
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            
            <ActionTable
              loading={loading}
              dataHeader={dataHeader}
              data={currentPageData} // Pass the data for the current page
              handleDelete={handleDelete}
              handleSort={handleSort}
              field={field}
              direction={direction}
            />

            {/* Render the Paginate component */}
            <Paginate
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage} // Set the currentPage state on page change
              loading={loading}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Actions;
