import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className=' w-screen h-screen overflow-x-hidden overflow-y-auto'>
            <div className=' text-center mt-10'>
                <h1 className='uppercase mb-5 text-blue-800 text-3xl font-bold'>Box Office</h1>
                <p className='text-xl font-bold mb-5'>
                    Are you looking for a movie or an actor?
                </p>
            </div>
            <div className='flex-1 overflow-y-auto overflow-x-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
