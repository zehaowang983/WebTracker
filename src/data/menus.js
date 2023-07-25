import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/dashboard/",
    icon: faTachometer,
  },
  {
    label: 'Task Management'
  },
  {
    label: "Create Task",
    path: "/dashboard/form",
    icon: faWindows,
  },
  {
    label: "Task Lists",
    path: "/dashboard/tasks",
    icon: faNotdef,
  },
  
  {
    label: 'Dataset'
  },
  {
    label: "Action Collection",
    path: "/dashboard/actions",
    icon: faWindows,
  },
  {
    label: "LLM Evaluation",
    path: "/dashboard/eval",
    icon: faTable,
  },
];

export default initMenu