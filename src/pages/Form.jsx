import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { auth } from "~firebase";
import { getPort } from "@plasmohq/messaging/port"

function Form() {
  const [sidebarToggle] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [isTaskCreated, setIsTaskCreated] = useState(false);

  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    conclusion: "",
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate input
    
    setLoading(true);
    const setTaskPort = getPort("setTask");
    setTaskPort.postMessage({
        body: {
            task_title: formData.title,
            task_description: formData.description,
            task_conclusion: formData.conclusion,
            user_id: auth.currentUser.uid
        }
    })
    setTaskPort.onMessage.addListener(function(res) {
        console.log(res)
        setIsTaskCreated(true);
        setLoading(false);
    });
  };

  // Function to handle input changes and update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <>
    <main className="h-full">
    <Navbar toggle={sidebarToggle} />
    <div className="mainCard">
    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
      {isTaskCreated ? (
        <div className="bg-emerald-100 border-l-4 border-emerald-500 text-emerald-700 p-4 mb-4">
          Task created successfully!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="taskTitle" className="block text-gray-700 text-lg font-bold mb-2">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Find the cheapest flight from Beijing to HongKong"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taskDescription" className="block text-gray-700 text-lg font-bold mb-2">
            Task Description
          </label>
          <textarea
            id="taskDescription"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Comparing various flight options, including different airlines, departure times, and ticket prices. The objective is to identify the cheapest available flight that meets the traveler's requirements, ensuring a smooth and budget-friendly travel experience.
            To accomplish this task, you may use online flight booking platforms, official airline websites, or any other reputable travel resources. Your findings should be organized and presented in a clear manner, highlighting the most affordable options while considering factors such as layovers, flight duration, and any additional fees that might be associated with the chosen flights."
            rows="10"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="taskConclusion" className="block text-gray-700 text-lg font-bold mb-2">
            Task Conclusion
          </label>
          <textarea
            id="taskConclusion"
            name="conclusion"
            value={formData.conclusion}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Find the best-value flight within the specified constraints will greatly contribute to ensuring a seamless travel experience for the traveler while keeping costs at a minimum."
            rows="10"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            <span className="mr-2 md:uppercase">
              {loading ? "Processing...." : "Create Task"}
            </span>
          </button>
        </div>
      </form>
    </div>
    </div>
    </main> 
    </>
    //         <form>
    //           {/* Form Default */}
    //           <div>
    //             <label htmlFor="defaultInput" className="text-sm text-gray-600">
    //               Default Input
    //             </label>
    //             <input
    //               id="defaultInput"
    //               type="text"
    //               name="defaultInput"
    //               // onChange={(e) => setEmail(e.target.value)}
    //               className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
    //               placeholder="Default Input"
    //             />
    //           </div>

    //           {/* Form Large */}
    //           <div className="mt-6">
    //             <label htmlFor="largeInput" className="text-sm text-gray-600">
    //               Large Input
    //             </label>
    //             <input
    //               id="largeInput"
    //               type="text"
    //               name="largeInput"
    //               // onChange={(e) => setEmail(e.target.value)}
    //               className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
    //               placeholder="Large Input"
    //             />
    //           </div>

    //           {/* With Icon */}
    //           <div className="mt-6 relative">
    //             <label
    //               htmlFor="inputWithIcon"
    //               className="text-sm text-gray-600"
    //             >
    //               Input with Icon
    //             </label>

    //             <div className="inline-flex items-center justify-center absolute left-0 top-[0.85rem] h-full w-10 text-gray-400">
    //               <FontAwesomeIcon icon={faPhone} />
    //             </div>
    //             <input
    //               id="inputWithIcon"
    //               type="text"
    //               name="inputWithIcon"
    //               // onChange={(e) => setEmail(e.target.value)}
    //               className="text-sm placeholder-gray-500 pl-10 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
    //               placeholder="Input With Icon"
    //             />
    //           </div>

    //           <div className="mt-6 flex flex-row gap-4">
    //             <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
    //               Primary Button
    //             </button>

    //             <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
    //               Secondary Button
    //             </button>

    //             <button className="text-emerald-600 border border-emerald-300 px-3 py-2 rounded-lg shadow-lg text-sm">
    //               Outlined Button
    //             </button>

    //             <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
    //               <div>
    //                 <FontAwesomeIcon icon={faFloppyDisk} />
    //               </div>
    //               <span>Primary Icon Button</span>
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
  );
}

export default Form;
