import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArticleEdit: React.FC = () => {
  const navigate = useNavigate();
  const { state: article } = useLocation();

  const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");
  const [isPublished, setIsPublished] = useState(article?.is_published || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Article:", { title, content, is_published: isPublished });

    // After submitting, navigate back to the list
    // navigate("/");
  };

  return (
    
    <div className="row">
      <div className="col-12 mb-4">      
        <h2>Article List</h2>
      </div>
      {
        article ?
        (
          <>
              <form onSubmit={handleSubmit}>
                <div className="col-12 mb-4">
                    <div className="mb-3">
                      <label htmlFor="titleInput" className="form-label">Title</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="titleInput" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Enter title" 
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contentInput" className="form-label">Content</label>
                      <textarea 
                        className="form-control" 
                        id="contentInput" 
                        rows={5} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        placeholder="Enter content" 
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="isPublishedCheck" 
                        checked={isPublished} 
                        onChange={(e) => setIsPublished(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="isPublishedCheck">
                        Is Published
                      </label>
                    </div>
                </div>
                <div className="col-12">
                  <div className="row justify-content-end">
                    <div className="col-auto">
                      <button type="button" className="btn btn-secondary" onClick={() => navigate("/article-list")}>
                        Cancel
                      </button>
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </form>
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

export default ArticleEdit;
