import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArticleDetail: React.FC = () => {
  const navigate = useNavigate();
  const { state: article } = useLocation();

  return (
    
    <div className="row">
      <div className="col-12 mb-4">      
        <h2>Article List</h2>
      </div>
      {
        article ?
        (
          <>
            <div className="col-12 mb-4">
              <p><strong>Title:</strong> {article.title}</p>
              <p><strong>Content:</strong> {article.content}</p>
              <p><strong>Is Published:</strong> {article.is_published ? "Yes" : "No"}</p>
              <p><strong>Created At:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            </div>
            <div className="col-12">
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button type="button" className="btn btn-secondary" onClick={() => navigate("/article-list")}>
                    Back To List
                  </button>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary" onClick={() => navigate("/article-edit", {
                    state: article
                  })}>Edit Article</button>
                </div>
              </div>
            </div>
          </>
        )
        : 
        (
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/article-list")}>Back To List</button>
          </div>
        )
      }
    </div>
  );
};

export default ArticleDetail;
