import React from 'react'
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';
import AllQuotes from '../components/Admin/AllQuotes';

const AdminDashboardAllQuotes = () => {
  return (
    <>
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] pr-[40px] 800px:w-[330px]">
          <AdminSideBar active={3} />
        </div>
        <AllQuotes />
      </div>
    </div>
  </>
  )
}

export default AdminDashboardAllQuotes