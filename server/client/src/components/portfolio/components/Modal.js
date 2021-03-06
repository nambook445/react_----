import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  let { visible } = props;
  let { activeItem } = props;

  const topic = {
    0: {
      title: '100일 글쓰기 챌린지',
      image: 'static/mainpage.png',
      functionList: ['CRUD', '쿠키세션 방식 로그인', '회원가입과 정보 수정', '사진업로드'],
      skillList: [
        'MUI',
        'React',
        'Redux',
        'Axios',
        'NodeExpress',
        'Passport',
        'MySQL',
        'AWS',
        'Nginx',
        'HTTPS',
        'ESlint',
        'Git'
      ],
      design: {
        title: 'MUI기반',
        url: 'https://minimal-kit-react.vercel.app/dashboard/app',
        link: 'Minimal Template',
        desc: '을 이용했습니다.'
      },
      link: {
        git: 'https://github.com/nambook445/react_----',
        service: 'http://dotolee9.com'
      }
    },
    1: {
      title: '포트폴리오 페이지',
      image: 'static/landingpage.png',
      functionList: ['Animation', '반응형 디자인'],
      skillList: ['React', 'Styled-components', 'ESlint', 'Git'],
      design: {
        title: 'HTML,CSS,Jquery로 구성된 ',
        url: 'http://ahmedessa.net/resume/index.html',
        link: 'HTML Template',
        desc: '을 참고하여 React,CSS in Js로 구현했습니다.'
      },
      link: {
        git: 'https://github.com/nambook445/react_----/tree/master/server/client/src/components/portfolio',
        service: 'http://dotolee9.com'
      }
    },
    2: {
      title: 'Type Script',
      image: 'static/01.jpg',
      functionList: ['Animation', '반응형 디자인'],
      skillList: ['React', 'Styled-components', 'ESlint', 'Git'],
      design: {
        title: '',
        url: '',
        link: '',
        desc: ''
      },
      link: {
        git: 'https://github.com/nambook445',
        service: 'http://dotolee9.com'
      }
    }
  };

  return (
    <MyModal open={visible}>
      <div className="modal-container">
        <h2>{topic[activeItem].title}</h2>
        <div className="close-button">
          <img
            src="static/icons/close.svg"
            alt="close"
            onClick={() => {
              props.onChangeState();
            }}
          />
        </div>
        <div className="modal-item">
          <div>
            <h3>기능</h3>
            <ul>
              {[...topic[activeItem].functionList].map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <h3 style={{ paddingBottom: '16px' }}>디자인</h3>
            {[topic[activeItem].design].map((item, index) => {
              return (
                <p key={index}>
                  {item.title}
                  <a href={item.url} style={{ textDecoration: 'none', color: '#425bb5' }}>
                    {item.link}
                  </a>
                  {item.desc}
                </p>
              );
            })}
          </div>
          <img className="item-image" src={topic[activeItem].image} alt="" />
        </div>
        <div>
          <h3 style={{ paddingBottom: '16px' }}>기술스택</h3>
          {[...topic[activeItem].skillList].map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>

        <div className="link-button">
          <button
            onClick={() => {
              window.location = topic[activeItem].link.git;
            }}
          >
            깃허브
          </button>
          <button
            onClick={() => {
              window.location = topic[activeItem].link.service;
            }}
          >
            서비스
          </button>
        </div>
      </div>
    </MyModal>
  );
};

const MyModal = styled.div`
  display: flex;
  position: ${(props) => (props.open ? 'fixed' : 'relative')};
  height: ${(props) => (props.open ? '100vh' : 0)};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  top: 100%;
  transition: ${(props) => (props.open ? 'all 0.2s ease-in-out 0.2s' : null)};
  transform: ${(props) => (props.open ? 'translateY(-100%)' : null)};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: ${(props) => (props.open ? 1050 : 0)};

  .modal-container {
    display: grid;
    position: relative;
    justify-items: start;
    align-items: center;
    background: #f3f3f3;
    border-radius: 5px;
    border: 2px solid #ddd;
    width: 50%;
    height: 100%;
    padding: 1rem;
  }
  .close-button {
    position: absolute;
    top: 1em;
    right: 1em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .modal-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      display: block;
    }
  }
  .item-image {
    width: 100%;
    height: 100%;
  }
  .link-button {
    margin: 0 auto;
    button {
      padding: 5px;
      margin: 0 5px;
    }
  }
`;

export default Modal;
