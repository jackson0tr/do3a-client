import React, { useEffect, useState } from "react";
import axios from 'axios';
import { server } from '../../server'
import ScrollReveal from 'scrollreveal';

const scrollRevealOptions = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};



const Home = () => {
    const [data, setData] = useState([]);

    console.log("Data", data);
    console.log("SetData", setData);

    useEffect(() => {
        ScrollReveal().reveal('.container__left h1', {
          ...scrollRevealOptions,
        });
        ScrollReveal().reveal('.container__right h4', {
          ...scrollRevealOptions,
          delay: 2000,
        });
        ScrollReveal().reveal('.container__right p', {
          ...scrollRevealOptions,
          delay: 2500,
        });
      }, []);

    useEffect(() => {
        axios.get(`${server}/quote/get-all-quotes`, { withCredentials: true }).then((res) => {
            setData(res.data.quotes);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="container">
            <div class="container__left">
                <h1>دعاء للحج ياسر الشبيني</h1>
            </div>
            <div class="container__right">
                <div class="content">
                    <br />
                    <h4>دعاء للميت لعله من أفضل أدعية للمتوفى التي يفرح بها وتدخله الجنة، والدعاء للميت من الأعمال الصالحة التي يصل ثوابها للمتوفى</h4>
                    <br />
                    {
                        data && data.map((i, index) => (
                            <>
                                <p>
                                    {i?.quote}
                                </p>
                                <br />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default Home;

// last connect
{/* <div className="800px:items-center 800px:px-[2rem] py-0 m-auto text-center items-center justify-center relative flex flex-col overflow-hidden px-[5rem] py-0 max-w-[1200px]">
            <div className="800px:text-left p-[1rem] text-center">
                <h1 className="mb-[2rem] text-[2rem] font-bold text-[#2c2724] leading-[4.5rem]">دعاء للحج ياسر الشبيني</h1>
            </div>
            <div className="1000px:items-center 1000px:before:bottom-unset 1000px:before:top-0 1000px:before:h-full relative flex before:absolute before:content-[''] bottom-0 left-[50%] w-0 h-full rounded-[1rem] -z-[1] bg-[#f3eae5] origin-left container_animation translate-x-(-50%)">
                <div className="text-center ps-[2rem] pe-[2rem] px-0 py-[5rem] 1000px:text-left 1000px:max-w-[400px] 1000px:p-[5rem] 1000px:ms-unset 1000px:me-unset 1000px:p-[5rem]">
                    <h4 className="mb-[1rem] text-[1rem] font-medium text-[#2c2724]">
                        دعاء للميت لعله من أفضل أدعية للمتوفى التي يفرح بها وتدخله الجنة، والدعاء للميت من الأعمال الصالحة التي يصل ثوابها للمتوفى
                    </h4>
                    {
                        data && data.map((index, item) => (
                            <div key={index}>
                                <p className="text-[#2c2724] leading-[1.75rem]">
                                    {item.quote}
                                </p>
                                <br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div> */}