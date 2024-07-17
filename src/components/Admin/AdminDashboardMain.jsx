import React, { useEffect } from "react";
import styles from "../../styles/styles";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuotes } from "../../redux/actions/quote";
import Loader from "../Loader/Loader";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();
  const { adminQuotes,adminOrderLoading } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(getAllQuotes());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "رقم الحديث", minWidth: 150, flex: 0.7 },
    {
      field: "quote",
      headerName: "الحديث",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "تاريخ الحديث",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = [];

  adminQuotes &&
  adminQuotes.forEach((item) => {
      row.push({
        id: item._id,
        quote: item.quote,
        createdAt: item.createdAt.slice(0,10),
      });
    });

    console.log("quoteAdmin: ", adminQuotes);
    console.log("row: ", row);

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4">
        <h3 className="text-[22px] font-Poppins pb-2">ملخص</h3>
        <div className="w-full block 800px:flex items-center justify-between">
  
          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <FaQuoteLeft
                size={30}
                className="m-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                 جميع الأحاديث
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminQuotes && adminQuotes?.length}</h5>
            <Link to="/admin-all-quotes">
              <h5 className="pt-4 pl-2 text-[#077f9c]"> جميع الأحاديث</h5>
            </Link>
          </div>
        </div>
  
        <br />
        <h3 className="text-[22px] font-Poppins pb-2">اخر الأحاديث</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={4}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;