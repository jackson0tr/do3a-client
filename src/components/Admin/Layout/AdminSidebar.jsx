import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pr-2 text-[18px] font-[400] ${
              active === 1 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            لوحة التحكم
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-create-quote" className="w-full flex items-center">
          <IoIosAddCircleOutline 
            size={20}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pr-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            اضافة حديث
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-all-quotes" className="w-full flex items-center">
          <FaQuoteLeft
            size={20}
            color={`${active === 3 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pr-2 text-[18px] font-[400] ${
              active === 3 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            جميع الاحاديث
          </h5>
        </Link>
      </div>

      
    </div>
  );
};

export default AdminSideBar;
