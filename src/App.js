
import React, { useState } from 'react';
import Details from './Details';
import Detail from './Detail';
import Profile from './Profile';

function Header({ title, logoImage, user, homeCb, cb }) {

  const handleLogoClick = (e) => {
    e.preventDefault();
    cb('home');
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    cb('profile', user, "Profile");
  }

  return (
    <div>
      <div className={'header'}>
        <a href={"#"} onClick={handleLogoClick}>
          <img  width={25} height={25} src={logoImage} />
        </a>
        <h4 className={'header__title'}>{title}</h4>
        <p><a href={"#"} onClick={handleProfileClick}>Welcome {user.firstName}</a></p>
      </div>
    </div>
  )
}

function App({ appData }) {
  const { site, profile, data } = appData;
  const { title, logoImage } = site;
  const { features, metadata } = data;

  const [ view, setView ] = useState("home");
  const [ viewData, setViewData ] = useState(features);
  const [ viewTitle, setViewTitle ] = useState(metadata.title);

  const handleViewChange = (view, item = features, title = metadata.title) => {
    setView(view);
    setViewData(item);
    setViewTitle(title);
  }

  return (
      <div>
        {console.log(view)}
        <Header title={title} logoImage={logoImage} user={profile} cb={handleViewChange} />
        <div className={"main-content"}>
          {view === 'home' && <Details title={viewTitle} data={viewData} cb={handleViewChange} />}
          {view === 'profile' && <Profile title={viewTitle} data={viewData} />}
          {view === 'detail' && <Detail itemTitle={viewTitle} data={viewData} />}
        </div>
      </div>
  );
}
export default App;