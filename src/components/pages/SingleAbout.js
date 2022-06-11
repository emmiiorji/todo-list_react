import React from 'react';
import { useParams } from 'react-router-dom';
import About from './About';

const SingleAbout = () => {
  const { slug } = useParams();

  const connectLinkStyle = {
    textTransform: 'lowercase',
    color: 'orangered',
    display: 'inline',
    padding: '0 0 0 3px',
  };

  const aboutData = [
    {
      slug: 'about-app',
      title: 'About the App',
      description: () => (
        <p style={{ padding: '10px' }}>
          You can add, delete, submit, and edit items in this app.
          Simply double-click an item to edit it. When you&#39;re finished,
          hit the enter key to resubmit.Your data will be saved in the
          browser&#39;s local storage by this app. You can access your to-do items
          regardless of whether you reload, close, or reopen your app.
        </p>
      ),
    },
    {
      slug: 'about-author',
      title: 'About the Author',
      description: () => (
        <p>
          This app was developed by Emmanuel Orji-Ihuoma, a full-stack developer and a data analyst.
          He is open to freelance Gig. Check out Emmanuel on GitHub
          <a href="https://github.com/emmiiorji" style={connectLinkStyle}>@emmiiorji</a>
          .
        </p>
      ),
    },
  ];

  let aboutContent = aboutData.filter((item) => item.slug === slug)[0];
  if (!aboutContent) {
    aboutContent = { title: '', description: '' };
  }
  const { title, description } = aboutContent;

  if (aboutContent.title) {
    return (
      <div style={{ display: 'flex' }}>
        <About />
        <div className="main__content" style={{ alignSelf: 'center' }}>
          <h1>{title}</h1>
          {description()}
        </div>
      </div>
    );
  }

  return '';
};
export default SingleAbout;
