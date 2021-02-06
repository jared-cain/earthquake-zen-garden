import React from 'react';

function Profile({ title, data}) {
  const {
    firstName,
    lastName, 
    avatarImage,
    phone,
    email,
    bio
   } = data;

  return(
    <div className={"profile-wrapper"}>
      <h4 className={"table-wrapper__title"}>{title}</h4>
      <div className={"profile"}>
        <div style={{ paddingRight: "0.5rem"}}>
          <img width={120} height={120} src={avatarImage}/>
        </div>
        <div className={"table-wrapper"}>
        <table className={"table"}>
          <tbody className={"table__body"}>
            <tr>
              <td className={"detail__cell__key"}>First Name</td>
              <td className={"detail__cell"}>{firstName}</td>
            </tr>
            <tr>
              <td className={"detail__cell__key"}>Last Name</td>
              <td className={"detail__cell"}>{lastName}</td>
            </tr>
            <tr>
              <td className={"detail__cell__key"}>Phone</td>
              <td className={"detail__cell"}>{phone}</td>
            </tr>
            <tr>
              <td className={"detail__cell__key"}>Email</td>
              <td className={"detail__cell"}>{email}</td>
            </tr>
            <tr>
              <td className={"detail__cell__key"}>Bio</td>
              <td className={"detail__cell"}>{bio}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>

  )
}

export default Profile