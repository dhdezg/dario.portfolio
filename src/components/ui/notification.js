import { X } from "lucide-react";
import React from "react";

const Notification = ({ message, type, onClose }) => (
  <div
    className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2 
      ${
        type === "success"
          ? "bg-blue-500 text-white dark:bg-lime-400 dark:text-slate-950"
          : "bg-red-500 text-white"
      }`}
  >
    <span>{message}</span>
    <button onClick={onClose} className="p-1 hover:bg-black/10 rounded">
      <X className="w-4 h-4" />
    </button>
  </div>
);

export default Notification;
