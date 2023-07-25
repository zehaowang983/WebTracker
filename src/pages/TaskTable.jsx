import { React, useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { secondsToDate } from "../utils/timeUtils"; // Import the time conversion function

function TaskTable({ loading, dataHeader, data, handleDelete, handleSort, field, direction}) {
  const [expandedRows, setExpandedRows] = useState([]);

  // Function to handle expanding/collapsing rows
  const toggleRow = (index) => {
    const newRow = [...expandedRows];
    const rowIndex = newRow.indexOf(index);
    if (rowIndex === -1) {
      newRow.push(index);
    } else {
      newRow.splice(rowIndex, 1);
    }
    setExpandedRows(newRow);
  };
  
  return (
    <Datatables loading={loading} dataHeader={dataHeader} handleSort={handleSort} field={field} direction={direction}>
      {data?.map((task, index) => (
        task && (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        > 
          <TableCell dataLabel="Title" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{task.task_title}</span>
          </TableCell>
          
          <TableCell dataLabel="Description" showLabel={true}>
            {task.url ? (
              <p className="font-normal text-sm text-gray-500" style={{ maxWidth: "500px", whiteSpace: "nowrap", overflow: "scroll"}}>{task.task_description}</p>
            ) : null}          
          </TableCell>

          <TableCell dataLabel="Conclusion" showLabel={true}>
              {task.query ? (
                <p className="font-normal text-sm text-gray-500" style={{ maxWidth: "500px", whiteSpace: "nowrap", overflow: "visible" }}>{task.task_conclusion}</p>
              ) : null}
          </TableCell>
            
          <TableCell dataLabel="Solved" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{task.is_solved}</span>
          </TableCell>

          <TableCell dataLabel="Time" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{secondsToDate(task.created_at.seconds)}</p>
          </TableCell>
          
          <TableCell dataLabel="Operation" showLabel={true}>
            {/* You can add edit and delete buttons here */}
            {/* Replace the link paths with the actual routes for edit and delete */}
            <Link
              to={`/edit/${task.id}`}
              className={`text-sky-700 inline-flex py-2 px-2 rounded text-sm`}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleDelete(task.id);
              }}
              to={`/delete/${task.id}`}
              className={`text-red-700 inline-flex py-2 px-2 rounded text-sm`}
            >
              <FontAwesomeIcon icon={faRemove} />
            </Link>

            {/* Add the details button */}
            <Link
              to={`/dashboard/tasks/detail/${task.id}`} 
              className={`text-gray-700 inline-flex py-2 px-2 rounded text-sm bg-blue-100`}
            >
              Details
            </Link>
          </TableCell>
        </tr>
      )))}
    </Datatables>
  );
}

export default TaskTable;
