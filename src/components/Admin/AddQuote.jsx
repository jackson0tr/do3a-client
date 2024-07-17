import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuote } from "../../redux/actions/quote";
import { toast } from "react-toastify";

const CreateQuote = () => {
  const { success, error } = useSelector((state) => state.quote);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("تم اضافة الحديث بنجاح");
      navigate("/admin/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    newForm.append("quote", quote);
  
    dispatch(
      addQuote({
        quote,
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">أضف حديث</h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            أدخل الحديث <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="quote"
            value={quote}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setQuote(e.target.value)}
            placeholder="أدخل الحديث"
          ></textarea>
        </div>
        <br />
        <br />
          <div>
            <input
              type="submit"
              value="أضف الحديث"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
      </form>
    </div>
  );
};

export default CreateQuote;