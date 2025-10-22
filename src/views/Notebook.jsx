import {  useState } from "react";
import { Sidebar } from "../components/notebooksidebar/notebooksidebar";
import { useNavigate } from "react-router-dom";


const NotebookPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex dark:bg-PrimaryBlack bg-PrimaryWhite dark:text-gray-200 text-black h-screen">
      <Sidebar />
    </div>
  );
};


export default NotebookPage;