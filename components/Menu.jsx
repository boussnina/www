import React from 'react';

function Menu({ content, setContent }) {
  const handleClick = (index) => {
    setContent(index);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Elias Boussnina</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a onClick={() => handleClick(0)} className="mr-5 hover:text-gray-900">About</a>
            <a onClick={() => handleClick(1)} className="mr-5 hover:text-gray-900">Projects</a>
            <a href='http://www.github.com/boussnina' className="mr-5 hover:text-gray-900" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Menu;
