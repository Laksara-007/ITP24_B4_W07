import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#967F57]">
        <div className="bg-[#967F57]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Copyright@Hertage.All Right Rserved
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @heritage.com
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-white">
              <span className="mx-8">Privacy</span>
              <span>Terms of Conditions</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer