import React from 'react';
import './About.css';

function About(props) {

  const info = {
    name: "Dongit",
    email: "rlagusehd45@naver.com",
    github: "https://github.com/gusehd66",
    phone: "010-1234-5678"
  }

  return (
    <div className="about__container">
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRTHpF%2Fbtq8WaUVN3x%2FY9TTHpR9g6U6sU6RwiqQBK%2Fimg.png" alt="logo" />
      <p>
        {info.name}
      </p>
      <div className="about__info">
        <p>
          {info.email}
        </p>
        <p>
          {info.github}
        </p>
        <p>
          {info.phone}
        </p>
      </div>

    </div>
  )
}

export default About;