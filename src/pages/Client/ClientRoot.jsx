import React, { useEffect, useState } from 'react'
import ClientHeader from '../../components/Client/ClientHeader'
import { Outlet } from "react-router-dom";

const ClientRoot = () => {
 
  return (
    <>
    <ClientHeader />
    <Outlet />
    </>
  )
}

export default ClientRoot