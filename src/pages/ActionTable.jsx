import { React, useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import { secondsToDate } from "../utils/timeUtils"; // Import the time conversion function

function ActionTable({ loading, dataHeader, data, handleDelete, handleSort, field, direction}) {
  
  return (
    <Datatables loading={loading} dataHeader={dataHeader} handleSort={handleSort} field={field} direction={direction}>
      {data?.map((action, index) => (
        action && (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        > 
          <TableCell dataLabel="Type" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">{action.type}</span>
          </TableCell>
          
          <TableCell dataLabel="URL" showLabel={true}>
            {action.url ? (
              <p className="font-normal text-sm text-gray-500" style={{ maxWidth: "500px", whiteSpace: "nowrap", overflow: "scroll"}}>{action.url}</p>
            ) : null}          
          </TableCell>

          <TableCell dataLabel="Query" showLabel={true}>
              {action.query ? (
                <p className="font-normal text-sm text-gray-500" style={{ maxWidth: "500px", whiteSpace: "nowrap", overflow: "visible" }}>{action.query}</p>
              ) : null}
          </TableCell>

          <TableCell dataLabel="Quoted" showLabel={true}>
              {action.quoted ? (
                <p className="font-normal text-sm text-gray-500" style={{ maxWidth: "500px", whiteSpace: "nowrap", overflow: "visible" }}>{action.quoted}</p>
              ) : null}
          </TableCell>

          <TableCell dataLabel="Time" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{secondsToDate(action.openat.seconds)}</p>
          </TableCell>
          
          <TableCell dataLabel="Operation" showLabel={true}>
            {/* You can add edit and delete buttons here */}
            {/* Replace the link paths with the actual routes for edit and delete */}
            <Link
              to={`/edit/${action.id}`}
              className={`text-sky-700 inline-flex py-2 px-2 rounded text-sm`}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleDelete(action.id);
              }}
              to={`/delete/${action.id}`}
              className={`text-red-700 inline-flex py-2 px-2 rounded text-sm`}
            >
              <FontAwesomeIcon icon={faRemove} />
            </Link>
          </TableCell>
        </tr>
      )))}
    </Datatables>
  );
}

export default ActionTable;
