import React from 'react';
import gmail from '../images/gmail.png';
import googleCalendar from '../images/google-calendar.png';
import googleContacts from '../images/google-contacts.png';
import googleDrive from '../images/google-drive.png';
import googlePlay from '../images/google-play.png';
import hangoutsMeet from '../images/hangouts-meet.png';
import location from '../images/location.png';
import search from '../images/search.png';
import user from '../images/user.png';
import youtube from '../images/youtube.png';
import question from '../images/question.png';

const MenuItem = ({ img, name }) => {
  return (
    <div className='menu-item'>
      <img src={img} alt='#' className='menu-img' />
      <div className='menu-name'>{name}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className='menu'>
      <MenuItem img={user} name='User' />
      <MenuItem img={search} name='Search' />
      <MenuItem img={location} name='Maps' />
      <MenuItem img={youtube} name='Youtube' />
      <MenuItem img={googlePlay} name='Google Play' />
      <MenuItem img={gmail} name='Gmail' />
      <MenuItem img={hangoutsMeet} name='Meet' />
      <MenuItem img={googleCalendar} name='Calendar' />
      <MenuItem img={googleDrive} name='Drive' />
      <MenuItem img={googleContacts} name='Contacts' />
      <MenuItem img={question} name='Empty' />
      <MenuItem img={question} name='Empty' />
      <MenuItem img={question} name='Empty' />
      <MenuItem img={question} name='Empty' />
      <MenuItem img={question} name='Empty' />
      <MenuItem img={question} name='Empty' />
    </div>
  );
};

export default Menu;
