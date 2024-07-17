import React from 'react'
import CreateQuote from '../components/Admin/AddQuote'
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';

const AdminDashboardAddQuote = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={2} />
        </div>
        <div className="w-full justify-center flex">
          <CreateQuote />
        </div>
      </div>
    </>
  )
}

export default AdminDashboardAddQuote