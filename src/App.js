import React from "react";

import logo from './logo.png';
import './App.css';

import Header from './modules/Header'
import Members from './modules/Members'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


import ScrollToButton from "./modules/ScrollToButton";
import Section from "./modules/Section";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "./styles.css";
import YoutubeEmbed from "./modules/YoutubeEmbed";



const sections = ["top", "event", "contact", "footer"];


// -----------------
// ANIMATING SCROLL 
// https://codesandbox.io/s/scroll-to-element-react-hs0gj?from-embed=&file=/src/App.js



function App() {




  const images = [
      "images/0001.JPG",
      "images/0002.JPG",
      "images/0003.JPG",
      "images/0004.JPG",
      "images/0005.JPG",
      "images/0006.JPG",
  ];

  const buttonStyle = {
      width: "30px",
      background: 'none',
      border: '0px',
      marginLeft: '2em',
      marginRight: '2em'
  };

  const slideSettings = {
      easing: "cubic-out",
      prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
      nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
  }


const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];



  const descriptionRef = React.useRef(null);




  return (
    <div className="bg-gray-800 flex flex-col h-screen justify-between">

      <Header />



      <div className="bg-gray-300 text-sm text-gray-500 text-center">


        <img src={logo} className="m-auto" alt="logo" />
        
        {/* 
        <h1 className="font-bold text-2xl p-12">
          i—/o|.Oとは
        </h1>
        <div className="m-8 mb-32">
          <p className="text-right">われわれ人間は何を認識し、何を感じるか。</p>
          <p className="text-right">そしてどう行為するのか。</p>
          <p className="text-right">というように<code className="underline px-4 font-bold">input/output</code>で解釈をすることで、</p>
          <p className="text-right">「認識作用」/「表現行為ないし態度」を拡張する表現を探求する研究機関である。</p>
        </div>
        */}

        <Section id={sections[1]} ></Section>

        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.1000
        </div>


        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.111
        </div>

        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.101
        </div>


        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.100
        </div>


        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.11
        </div>

        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.10
        </div>
        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.1
        </div>


        <div className="text-slate-500 mb-12 font-bold text-lg">
        O vol.0
        </div>

        <div className="my-24 grid my-8 gap-y-6">
          <a href="#">
              <img src="/images/vol0_fryer_color.png" className="w-full lg:w-[55%] xl:w-[55%] sm:w-full m-auto" alt="logo" />
          </a>  
        </div>




        {/*
        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>
        */}


        {/*
        <Slide {...slideSettings} >

            <div className="each-slide-effect">

                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>

            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
            </div>
        </Slide>
        */}



        <div style={{background: 'linear-gradient(180deg, rgba(210,210,210,1) 0%, rgba(200,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-16 bg-red-800">
        </div>


        {/*
        <div className="place-items-center mx-12 my-48">


          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="iaod_lab"
            options={{width: 700, height: 700}}
          />
        </div>
        */}


        <div className="bg-[#1d24b4] text-center text-sm text-red-500 p-24">
          <a className="underline" href="mailto:iaod.lab@gmail.com">contact : iaod.lab@gmail.com</a>
          <p className="my-5">Copyright (c) 2023 i—/o|.O</p>
          <p className="m-24">
          </p>
          <a className="text-white text-5xl mt-16" href="https://io-lab.netlify.app/">
            i—/o|.Lab -->>
          </a>  

        </div>

          


      </div>



    </div>
  );
}

export default App;
