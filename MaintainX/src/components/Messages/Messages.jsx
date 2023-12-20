import React from 'react';

const messages= () => {
  return (
    <div className="header-one">
      <div className="request-first">
        <h2 className="requests">Messages</h2>
      </div>
      <div className="form">
        <form className="search-form">
          <input className="search" type="search" placeholder="Search Or start a new search" />
        </form>
        <button>+NEW MESSAGE</button>
      </div>
    </div>
  );
};

export default messages;
