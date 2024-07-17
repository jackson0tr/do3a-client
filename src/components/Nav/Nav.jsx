import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
      </div>
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/admin/dashboard">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-white"
                    >
                      تسجيل دخول 
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>
              <br />
              <br />
              <br />
              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/admin/dashboard">
                    <CgProfile size={30} color="#000000b7" />
                  </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      تسجيل دخول 
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;