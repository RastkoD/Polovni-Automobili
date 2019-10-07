import React, { Component } from 'react';
import '../Styles/Home.scss';

//array of pictures of same size
const imgUrls = [
  {
    id: 1,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1457/14575253/161530a65c1e-1920x1080.jpg'
  },
  {
    id: 2,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1455/14553205/170a5cf74815-1920x1080.jpg'
  },
  {
    id: 3,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1419/14192933/967c3a525034-370x278.jpg'
  },
  {
    id: 4,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1456/14568758/0f50fca42e5c-370x278.jpg'
  },
  {
    id: 5,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1429/14291048/31463cba5922-370x278.jpg'
  },
  {
    id: 6,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1436/14361296/2cb73b8f63d8-370x278.jpg'
  },
  {
    id: 7,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1455/14551244/9b8f3817afa1-370x278.jpg'
  },
  {
    id: 8,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1251/12519206/ab248d1ecf2c-370x278.jpg'
  },
  {
    id: 9,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1311/13115865/9bfdb9102d8e-370x278.jpg'
  },
  {
    id: 10,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1423/14237968/7b695d0d7141-370x278.jpg'
  },
  {
    id: 11,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1421/14215564/596e5ebdca4a-370x278.jpg'
  },
  {
    id: 12,
    url:
      'https://images3.polovniautomobili.com/user-images/thumbs/1417/14172558/e9b55c22f3ed-370x278.jpg'
  }
];
//Imagelist
const GalleryList = props => {
  const list = props.images.map(image => (
    <li key={image.id} className="gallery__item">
      <img src={image.url} alt="" />
    </li>
  ));
  return <ul className="gallery__ul">{list}</ul>;
};
//main component
class Home extends React.Component {
  //state
  state = {
    images: imgUrls
  };
  render() {
    const {} = this.state;
    return (
      <div>
        <h1 className="heading">Polovna vozila</h1>
        <div className="">
          <GalleryList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Home;
