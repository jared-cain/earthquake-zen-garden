import React from 'react';

function Detail({ itemTitle, data}) {
  const { properties } = data;
  const {
    title,
    mag,
    time,
    status,
    tsunami,
    type
  } = properties

  return(
    <div className={"table-wrapper"}>
      <h4 className={"table-wrapper__title"}>{itemTitle}</h4>
      <table className={"table"}>
        <thead>
          {/* <tr>
            {console.log(data)}
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr> */}
        </thead>
        <tbody className={"table__body"}>
          <tr>
            <td className={"detail__cell__key"}>Title</td>
            <td className={"detail__cell"}>{title}</td>
          </tr>
          <tr>
            <td className={"detail__cell__key"}>Magnitude</td>
            <td className={"detail__cell"}>{mag}</td>
          </tr>
          <tr>
            <td className={"detail__cell__key"}>Time</td>
            <td className={"detail__cell"}>{time}</td>
          </tr>
          <tr>
            <td className={"detail__cell__key"}>Status</td>
            <td className={"detail__cell"}>{status}</td>
          </tr>
          <tr>
            <td className={"detail__cell__key"}>Tsunami</td>
            <td className={"detail__cell"}>{tsunami}</td>
          </tr>
          <tr>
            <td className={"detail__cell__key"}>Type</td>
            <td className={"detail__cell"}>{type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail