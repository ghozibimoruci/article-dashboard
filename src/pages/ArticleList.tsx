import React, { useEffect, useRef, useState } from "react";
import { data } from "../assets/articles";
import { Grid } from "gridjs-react";
import {h} from "gridjs"
import { useNavigate } from "react-router-dom";
// import axios from "axios";

interface ArticleProps {
  id: number;
  title: string;
  body_content: string;
  is_published: "YES" | "NO";
  created_date: string;
  created_user: {
    id: number;
    name: string;
    email: string;
  }
}

const ArticleList: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [datas, setDatas] = useState<ArticleProps[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const popupRef = useRef(null);

  const getArticleList = () => {
    
    // uncomment below for integrate
    // const API_URL = `${apiUrl}/url_get_article_list`;
    // const token = localStorage.getItem("token")
    // axios.get(API_URL, {
    //   headers: {
    //       Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(response => {
    //   setDatas(response.data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    // uncomment above for integrate
    
    // comment below for integrate
    setDatas(data.map((data, idx) => ({
      id: idx,
      title: data.title,
      body_content: data.content,
      is_published: data.is_published?"YES":"NO",
      created_date: data.created_at,
      created_user: {
        id: 0,
        name: "Yohan Sture",
        email: "yohan.sture@gmail.com"
      }
    })));
    // comment above for integrate
  }

  useEffect(()=>{
    getArticleList();
  }, [])

  const doDeleteAction = () =>{
    if(selectedIndex > -1){
      // uncomment below for integrate
      // const API_URL = `${apiUrl}/url_delete_article/${selectedIndex}`;
      // const token = localStorage.getItem("token")
      // axios.get(API_URL, {
      //   headers: {
      //       Authorization: `Bearer ${token}`
      //   }
      // })
      // .then(response => {
      //   if(popupRef && popupRef.current){
      //     (popupRef.current as HTMLElement).click();
      //     getArticleList();
      //   }
      // })
      // .catch(error => {
      //     console.error('Error:', error);
      // });
      // uncomment above for integrate
    }
  }

  return (
    <div className="row justify-content-between">
      <div className="col-auto mb-4">      
        <h2>Article List</h2>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-primary" onClick={() => navigate("/article/add")}>Add New Article</button>
      </div>
      <div className="col-12" id="article-list-wrapper">
        <Grid
          data={datas.map(data => ({
            id: data.id,
            title: data.title,
            is_published: data.is_published,
            author: data.created_user.name,
            action1: data,
            action2: data,
            action3: data
          }))}
          columns={[{
            id: 'id',
            name: 'No',
            formatter: (value: number) => (
              value + 1
            )
          },{
            id: 'title',
            name: 'Title'
          }, {
            id: 'is_published',
            name: 'Is Published'
          }, {
            id: 'author',
            name: 'Author'
          }, {
            name: "Actions",
            columns: [{
              id: "action1",
              sort: false,
              formatter: (_, row) => {
                return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-primary',
                  onClick: () => {
                    const rowIndex = row.cells[0].data;
                    if(typeof rowIndex == "number"){
                      navigate(`/article/detail/${rowIndex}`);
                    }
                  }
                }, 'Detail');
              }
            }, {
              id: "action2",
              sort: false,
              formatter: (_, row) => {
                return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-warning',
                  onClick: () => {
                    const rowIndex = row.cells[0].data;
                    if(typeof rowIndex == "number"){
                      navigate(`/article/edit/${rowIndex}`);
                    }
                  }
                }, 'Edit');
              }
            }, {
              id: "action3",
              sort: false,
              formatter: (_, row) => {
                return h('button', {
                  className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-danger',
                  onClick: () => {
                    const rowIndex = row.cells[0].data;
                    if(typeof rowIndex == "number"){
                      if(popupRef && popupRef.current){
                        (popupRef.current as HTMLElement).click();
                        setSelectedIndex(rowIndex);
                      }
                    }
                  }
                }, 'Delete');
              }
            }]  }]}
            className={{
              header: "d-flex justify-content-end",
              tr: 'article-list-tr',
              table: 'article-list-table'
            }}
          search={true}
          sort={true}
          pagination={{ limit: 5 }}
        />
      </div>
      <button className="position-absolute z-0 d-none" data-bs-target="#modalDeleteArticle" data-bs-toggle="modal" ref={popupRef}></button>
      <div className="modal fade" id="modalDeleteArticle" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Warning</h1>
            </div>
            <div className="modal-body">
              Are you sure want to delete this article?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button className="btn btn-danger" onClick={doDeleteAction}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
