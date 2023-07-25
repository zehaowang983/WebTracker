import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash, faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { getPort } from "@plasmohq/messaging/port";
import { secondsToDate } from "../utils/timeUtils"; // Import the time conversion function

function TaskDetail() {
  const { taskId } = useParams();
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(null);
  const [isRecording, setIsRecording] = useState(null);

  useEffect(() => {
    const getTaskDetailPort = getPort("getTaskDetail");
    getTaskDetailPort.postMessage({
      body: {
        task_id: taskId
      }
    });
    getTaskDetailPort.onMessage.addListener((res) => {
      setTaskData(res);
      setLoading(false);
    });
  }, [taskId]);

  const handleStartRecording = () => {
    // Your logic to start recording goes here
    // For example, you can set a state variable to true or call a function to start recording.
    setIsRecording(true);
  };
  
  const handleStopRecording = () => {
    // Your logic to stop recording goes here
    // For example, you can set a state variable to false or call a function to stop recording.
    setIsRecording(false);
  };
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!taskData) {
    return <p>Task not found</p>;
  }

  return (
    <>
      <main className="h-full">
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
          {isRecording ? (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
              Action being recording!
            </div>
          ) : null}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="taskTitle"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="taskTitle"
                  name="title"
                  value={taskData.task_title}
                  readOnly
                  className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="taskDescription"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Task Description
                </label>
                <textarea
                  id="taskDescription"
                  name="description"
                  value={taskData.task_description}
                  readOnly
                  className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  rows="10"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="taskConclusion"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Task Conclusion
                </label>
                <textarea
                  id="taskConclusion"
                  name="conclusion"
                  value={taskData.task_conclusion}
                  readOnly
                  className="appearance-none border rounded w-full py-2 px-3 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  rows="10"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="taskTime"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Task Last Modified Time
                </label>
                <p className="font-normal text-lg text-gray-700">
                  {secondsToDate(taskData.created_at.seconds)}
                </p>
              </div>
              <div className="mb-6 flex items-center justify-end">
                <div className="flex gap-4">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    <span className="mr-2 md:uppercase">Start Recording</span>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </button>
                ): ( 
                  <button
                    onClick={handleStopRecording}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    <span className="mr-2 md:uppercase">Stop Recording</span>
                    <FontAwesomeIcon icon={faStopCircle} />
                  </button>
                )}
                <Link
                  to={`/edit/${taskId}`} 
                  className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <span className="mr-2 md:uppercase">
                    Edit Task
                  </span>
                  <FontAwesomeIcon icon={faPencil} />
                </Link>
                <button
                  onClick={() => handleDelete(taskId)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <span className="mr-2 md:uppercase">
                    Delete Task
                  </span>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TaskDetail;
