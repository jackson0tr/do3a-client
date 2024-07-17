import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteQuote, getAllQuotes } from "../../redux/actions/quote";
import Loader from "../Loader/Loader";

const AllQuotes = () => {
  const { quotes, isLoading } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuotes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteQuote(id));
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "رقم الحديث", minWidth: 150, flex: 0.7 },
    {
      field: "quote",
      headerName: "الحديث",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "createdAt",
      headerName: "تاريخ الحديث",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "شاهد",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin-edit-quote/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "مسح",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  quotes &&
    quotes.forEach((item) => {
      row.push({
        id: item._id,
        quote: item.quote,
        createdAt: item.createdAt.slice(0,10),
      });
    });
    
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllQuotes;