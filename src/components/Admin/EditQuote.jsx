import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editQuote } from "../../redux/actions/quote";
import { toast } from "react-toastify";
import axios from "axios";

const EditQuoteAdmin = () => {
  const { success, error } = useSelector((state) => state.quote);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quote, setQuote] = useState('');
  const [data,setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("تم تعديل الحديث بنجاح");
      navigate("/dashboard");
      window.location.reload();
    }

    axios.get(`${server}/quote/get-quote/${id}`, { withCredentials: true }).then((res) => {
      setData(res.data.quote);
    });

  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editQuote({
        quote,
        id
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">تحديث الحديث</h5>
      <form onSubmit={handleSubmit}>
        <br />
        {
          data ? (
            <div>
              <label className="pb-2">
                الحديث <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="30"
                required
                rows="8"
                type="text"
                name="quote"
                value={data?.quote}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setQuote(e.target.value)}
                placeholder="أدخل الحديث"
              ></textarea>
            </div>
          ) : (
            null
          )
        }
        <br />
        <br />
        <div>
          <input
            type="submit"
            value="تحديث الحديث"
            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default EditQuoteAdmin;