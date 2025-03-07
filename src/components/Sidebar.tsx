import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="row">
        <div className="col-12 p-4">
            <h4>MyArticles</h4>
        </div>
        <div className="col-12 px-4">
            <a href="/articles">List</a>
        </div>
    </div>
  );
};

export default Sidebar;
