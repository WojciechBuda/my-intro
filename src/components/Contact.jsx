import React from "react";


const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-gradient hover:text-gradient text-3xl no-select">
              WOJCIECH BUDA
            </p>
          </div>

          <button className="btn btn-sm">Contact me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
