import { Button, Input } from 'antd'
import React, { useState } from 'react'


const Home = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <section className=' text-center'>
            <div className='flex justify-center gap-4'>

                <Input placeholder='Search for something' onChange={(e) => {
                    setInputValue(e.target.value)
                }} value={inputValue}
                    className='max-w-[500px]'
                />

                <Button type='primary'>Search</Button>
            </div>

        </section>
    )
}

export default Home
