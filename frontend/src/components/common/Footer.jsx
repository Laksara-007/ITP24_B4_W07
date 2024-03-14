import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="text-gray-600 body-font bg-[#967F57]">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div clasNames="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src='assets/Logo.png' className="w h text-white p-2 " >
            </img>
        </a>
        <p className="mt-2 text-sm text-white">jkahnjoavnjasdloikvdnasjvoikldsnvlo<br/>
                                                vndvnjvoknsvkodsnmvkosnmvsk
                                                <br/>nbdasvnvvvvdwvv</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:ml-[500px]">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            <li>
                <a className="text-white hover:text-gray-800">Third Link</a>
            </li>
            </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
            <nav className="list-none mb-10">
            <li>
                <a className="text-white hover:text-gray-800">First Link</a>
            </li>
            <li>
                <a className="text-white hover:text-gray-800">Second Link</a>
            </li>
            </nav>
        </div>
        </div>
    </div>
    <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">CopyRight@Hertage.All Right Rserved
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <span className='mx-8'>Privacy</span>
        <span>Terms of Conditions</span>
        </span>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer