import React from 'react';
import { normalizeDate } from './utils';

function DetailsView({ title, data, cb}) {

  const handleItemClick = (e, item, title) => {
    e.preventDefault();
    cb("detail", item, title);
  }

  return(
    <div className={"table-wrapper"}>
      <h4 className={"table-wrapper__title"}>{title}</h4>
      <table className={"table"}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className={"table__body"}>
          {data && data.map(item => {
            const { properties } = item;
            const { title, mag, time } = properties;

            const date = normalizeDate(time);
                      
            return (
              <tr>
                <td className={"td__title"}>
                  <a href={"#"} onClick={(e) => handleItemClick(e, item, title)}>
                    {title}
                  </a>
                </td>
                <td className={"td__mag"}>{mag}</td>
                <td className={"td__date"}>{date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DetailsView