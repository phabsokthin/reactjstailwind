import React from 'react'

function Tailwinds() {
    return (
        <>

            <div className='container mx-auto p-3'>

                <div className='row'>


                    <h1 className='text-red-500'>Hello world</h1>
                    <h4 className='h-28 w-28 bg-orange-500 text-center leading-tight'>Boxing</h4>


                    <div className='grid grid-cols-5 gap-4'>
                        <div className='bg-blue-500 h-56 w-56 flex items-center justify-center rounded-full'>
                            <p className='text-white'>Box1</p>
                        </div>
                        <div className='bg-blue-500 h-56 w-56 flex items-center justify-center rounded-xl'>
                            <p className='text-white'>Box1</p>
                        </div>
                        <div className='bg-blue-500 h-56 w-56 flex items-center justify-center rounded-xl'>
                            <p className='text-white'>Box1</p>
                        </div>
                        <div className='bg-blue-500 h-56 w-56 flex items-center justify-center rounded-xl'>
                            <p className='text-white'>Box1</p>
                        </div>
                        <div className='bg-blue-500 h-56 w-56 flex items-center justify-center rounded-xl'>
                            <p className='text-white'>Box1</p>
                        </div>

                    </div>

                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-red-500">01</div>
                        <div class="bg-red-500">02</div>
                        <div class="bg-red-500">03</div>
                        <div class="col-span-2 bg-red-500">04</div>
                        <div class="bg-red-500">05</div>
                        <div class="bg-red-500">06</div>
                        <div class="col-span-2 bg-red-500">07</div>
                    </div>


                    <div className='grid grid-cols-4 gap-3 py-3'>

                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500 col-span-2'>
                                <h2>Grid Data</h2>
                            </div>
                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500 col-span-2'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                            <div className='bg-orange-500'>
                                <h2>Grid Data</h2>
                            </div>

                    </div>


                </div>





            </div>

        </>
    )
}

export default Tailwinds