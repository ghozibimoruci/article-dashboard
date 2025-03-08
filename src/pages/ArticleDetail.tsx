// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<ArticleDetailProps | null>(null);
  const navigate = useNavigate();
  
  const getArticleDetail = () => {
    // const { id } = useParams();
    // const API_URL = `url_get_detail_article/${id}`;
    // const token = localStorage.getItem("token")
    // axios.get(API_URL, {
    //   headers: {
    //       Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(response => {
    //   setArticle(response.data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    setArticle({
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
  }

  useEffect(() => {
    getArticleDetail();
  }, [])

  return (
    
    <div className="row">
      <div className="col-12 mb-4">      
        <h2>Article Detail</h2>
      </div>
      {
        article ?
        (
          <>
            <div className="col-12 mb-4">
              <p><strong>Title:</strong> {article.title}</p>
              <p><strong>Content:</strong> {article.body_content}</p>
              <p><strong>Is Published:</strong> {article.is_published}</p>
            </div>
            <div className="col-12">
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button type="button" className="btn btn-secondary" onClick={() => navigate("/article-list")}>
                    Back To List
                  </button>
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
