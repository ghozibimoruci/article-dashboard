// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ArticleDetailProps {
  title: string;
  body_content: string;
  is_published: string;
  created_date: string;
  created_user: {
    id: number;
    name: string;
    email: string;
  }
}

const ArticleEdit: React.FC = () => {
  const [article, setArticle] = useState<ArticleDetailProps | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const popupRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  
  const getArticleDetail = () => {
    const callbackAction = (detail: ArticleDetailProps) => {
      setArticle(detail);
      setTitle(detail.title);
      setContent(detail.body_content);
      setIsPublished(detail.is_published=="YES");
    }
    // uncomment below for integrate API
    // const { id } = useParams();
    // const API_URL = `url_get_detail_article/${id}`;
    // const token = localStorage.getItem("token")
    // axios.get(API_URL, {
    //   headers: {
    //       Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(response => {
    //   callbackAction(response.data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    // uncomment above for integrate API
    
    // comment below for integrate API
    callbackAction({
      "title":"Realize program case modern.",
      "body_content":"Open must skill conference law add. We federal start husband rich consumer animal foreign. Make candidate none big five. Item son eight attorney politics.",
      "is_published": "NO",
      "created_date":"2005-05-06T18:19:37",
      "created_user": {
        id: 0,
        name: "Yohan",
        email: "yohan.sture@gmail.com"
      }
    })
    // comment above for integrate API
  }

  useEffect(()=>{
    if(location.pathname.startsWith("/article/edit")){
      getArticleDetail();
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(location.pathname.startsWith("/article/edit")){
      doEditArticle();
    }else{
      doAddArticle();
    }
  };

  // const successCallback = () => {
  //   if(popupRef && popupRef.current){
  //     (popupRef.current as HTMLElement).click();
  //   }
  // }

  const doAddArticle = () => {
    // uncomment below for integrate API
    // const API_URL = `url_add_article${id}`
    // const token = localStorage.getItem("token")
    // axios.post(API_URL, {
    //   body: {
    //     title: title,
    //     content: content,
    //     is_published: isPublished
    //   },
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(_ => {
    //   successCallback();
    // })
    // .catch(error => {
    //   console.log("Error : ", error);
    // })
    // uncomment above for integrate API

  }

  const doEditArticle = () => {
    // uncomment below for integrate API
    // const API_URL = `url_update_article${id}`
    // const token = localStorage.getItem("token")
    // axios.post(API_URL, {
    //   body: {
    //     id: id,
    //     title: title,
    //     content: content,
    //     is_published: isPublished
    //   },
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(_ => {
    //   successCallback();
    // })
    // .catch(error => {
    //   console.log("Error : ", error);
    // })
    // uncomment above for integrate API
  }

  return (
    <div className="row">
      <div className="col-12 mb-4">
        {
          location.pathname.startsWith("/article/add") && 
          <h2>Create New Article</h2>
        } 
        {
          location.pathname.startsWith("/article/edit") && 
          <h2>Edit Article</h2>
        }
      </div>
      {
        article || location.pathname.startsWith("/article/add") ?
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
                        Back To List
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
      <button className="position-absolute z-0 d-none" data-bs-target="#modalSubmitArticle" data-bs-toggle="modal" ref={popupRef}></button>
      <div className="modal fade" id="modalSubmitArticle" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Success</h1>
            </div>
            <div className="modal-body">
              You have successfully {location.pathname.startsWith("/article/add") ? "added" : "edited"} the article!
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal" onClick={() => navigate("/article-list")}>Go To List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEdit;
