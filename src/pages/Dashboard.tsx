import React, { useEffect, useState } from "react";
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

const Dashboard: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [datas, setDatas] = useState<ArticleProps[]>([]);

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
    //   setDatas(response.data.data);
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

  return (
    <div className="row justify-content-between">
      <div className="col-auto mb-4">      
        <h2>Dashboard</h2>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-primary" onClick={() => navigate("/article-list")}>See Article List</button>
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
              }, 'Open');
            }
          }]}
          className={{
            header: "d-flex justify-content-end",
          }}
          search={true}
          sort={true}
          pagination={{ limit: 5 }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
