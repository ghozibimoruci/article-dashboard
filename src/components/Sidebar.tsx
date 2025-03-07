import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="row sidebar">
        <div className="col-12 p-4">
            <h1>MyArticles</h1>
        </div>
        <div className="col-12 px-4">
            <a className="btn btn-link text-decoration-none text-black d-flex align-items-center px-0 gap-3" href="/articles">
            <span className="material-symbols-outlined">
              view_list
            </span>
            Article List</a>
        </div>
    </div>
  );
};

export default Sidebar;
