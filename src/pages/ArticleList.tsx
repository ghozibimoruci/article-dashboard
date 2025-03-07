import React, { useEffect, useState } from "react";
import { data } from "../assets/articles";

interface ArticleProps {
  title: string;
  content: string;
  is_published: boolean;
  created_at: string;
}

const ArticleList: React.FC = () => {
  const [datas, setDatas] = useState<ArticleProps[]>([]);

  useEffect(()=>{
    const newData = data;
    setDatas(newData);
  }, [])

  return (
    <div className="row">
      <div className="col-12 mb-4">      
        <h2>Article List</h2>
      </div>
      <div className="col-12">
        {
          datas.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  {
                    Object.keys(datas[0]).map(
                      (key, idx) => (
                        <th scope="col" key={idx}>{key}</th>
                      )
                    )
                  }
                </tr>
              </thead>
              <tbody>
                {
                  datas.map(
                    (data, idx) => (
                      <tr key={idx}>
                        <td>{data.title}</td>
                        <td>{data.content}</td>
                        <td>{data.is_published ? 'yes' : 'no'}</td>
                        <td>{data.created_at}</td>
                      </tr>
                    )
                  )
                }
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
};

export default ArticleList;
