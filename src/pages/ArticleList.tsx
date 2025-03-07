import React, { useEffect, useState } from "react";
import { data } from "../assets/articles";
import { Grid } from "gridjs-react";
import {h} from "gridjs"
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  id: number
  title: string;
  content: string;
  is_published: boolean;
  created_at: string;
}

const ArticleList: React.FC = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<ArticleProps[]>([]);

  useEffect(()=>{
    const newData = data.map((item, idx) => ({
      ...item,
      id: idx
    }));
    setDatas(newData);
  }, [])

  return (
    <div className="row">
      <div className="col-12 mb-4">      
        <h2>Article List</h2>
      </div>
      <div className="col-12">
        <Grid
          data={datas.map(data => ({
            ...data,
            action: data
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
            id: 'content',
            name: 'Content'
          }, {
            id: 'is_published',
            name: 'Is Published',
            formatter: (value: boolean) => (
              value ? 'Yes' : 'No'
            )
          }, {
            id: 'created_at',
            name: 'Created At'
          },{ id: "actions", name: "Actions", formatter: (_, row) => {
            return h('button', {
              className: 'py-2 mb-4 px-4 border rounded-md text-white btn btn-primary',
              onClick: () => {
                const rowIndex = row.cells[0].data;
                if(typeof rowIndex == "number"){
                  const detail = datas[rowIndex];
                  navigate(`/article-detail`, { state: detail });
                }
              }
            }, 'Detail');
          } }]}
          search={true}
          sort={true}
          pagination={{ limit: 5 }}
        />
      </div>
    </div>
  );
};

export default ArticleList;
