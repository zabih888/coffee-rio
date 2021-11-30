import splideOne from "./assets/images/splide-home/one.jpg";
import splideTwo from "./assets/images/splide-home/two.jpg";
import splideThree from "./assets/images/splide-home/three.jpg";
import splideFour from "./assets/images/splide-home/four.jpg";

import AltrImgOne from "./assets/images/alternativeHome/One.jpg";
import AltrImgTwo from "./assets/images/alternativeHome/Two.jpg";
import AltrImgThree from "./assets/images/alternativeHome/Three.jpg";
import AltrImgFour from "./assets/images/alternativeHome/Four.jpg";
import AltrImgFive from "./assets/images/alternativeHome/Five.jpg";
import AltrImgSix from "./assets/images/alternativeHome/Six.jpg";

import AltrSvgOne from "./assets/images/alternativeSvg/svg2.svg";
import AltrSvgTwo from "./assets/images/alternativeSvg/svg7.svg";
import AltrSvgThree from "./assets/images/alternativeSvg/svg9.svg";
import AltrSvgFour from "./assets/images/alternativeSvg/svg10.svg";
import AltrSvgFive from "./assets/images/alternativeSvg/svg11.svg";
import AltrSvgSix from "./assets/images/alternativeSvg/svg12.svg";


import brazilDark from "./assets/images/cupCountry/brazil-dark.png";
import brazilMed from "./assets/images/cupCountry/brazil-medium.png";
import keniaDark from "./assets/images/cupCountry/kenia-dark.png";
import keniaMed from "./assets/images/cupCountry/kenia-medium.png";
import proDark from "./assets/images/cupCountry/pro-dark.png";
import proMed from "./assets/images/cupCountry/pro-medium.png";
import oganda from "./assets/images/cupCountry/oganda-medium.png";
import somatra from "./assets/images/cupCountry/somatra-dark.png";
import nikaragoe from "./assets/images/cupCountry/nikaragoe-medium.png";


export const splideData = [
  {
    fristText: "روز خوب با",
    secondText: "قهوه شروع میشه",
    linkText: "بزن بریم",
    img: splideOne,
  },
  {
    fristText: "استایلت بساز",
    secondText: "مثل هیج کس نباش",
    linkText: "بزن بریم",
    img: splideTwo,
  },
  {
    fristText: "قهوه بدون کافئین",
    secondText: "جذاب و متفاوت",
    linkText: "بزن بریم",
    img: splideThree,
  },
  {
    fristText: "عطر خوش   ",
    secondText: "چهار راه استانبول",
    linkText: "بزن بریم",
    img: splideFour,
  },
];

export const alternativeData = [
  { img: AltrImgOne, imgSvg: AltrSvgOne, text: "کاپ" },
  { img: AltrImgTwo, imgSvg: AltrSvgTwo, text: " دمی" },
  { img: AltrImgThree, imgSvg: AltrSvgThree, text: "هورکا" },
  { img: AltrImgFour, imgSvg: AltrSvgFour, text: " ترک" },
  { img: AltrImgFive, imgSvg: AltrSvgFive, text: "لوازم" },
  { img: AltrImgSix, imgSvg: AltrSvgSix, text: "شکلات" },
];

export const cupRio = [
  {
    name: "برزیل دارک60%ربوستا",
    description: "تلخی بالا، اسیدیته کم، کافئین بالا، رایحه شیرین و رست شده، طعم یاد آجیلی",
    image_url: brazilDark,
    id: 101,
    price: 120,
    off_price: 110,
  },
  {
    name: "برزیل مدیوم 60% ربوستا",
    description: "تلخی متوسط، اسیدیته متوسط روبه بالا، کافئین بالا، رایحه گل ها، طعم یادمیوه ای ومرکبات وگلی",
    image_url: brazilMed,
    id: 102,
    price: 140,
    off_price: 120,
  },
  {
    name: "کنیا دارک100%عربیکا",
    description: "تلخی بالا، اسیدیته کم، کافئین متوسط، رایحه کاراملی، طعم یادهای میوه ای و آجیلی",
    image_url: keniaDark,
    id: 103,
    price: 150,
    off_price: 90,
  },
  {
    name: "کنیا مدیوم100%عربیکا",
    description: "تلخی متوسط، اسیدیته متوسط، کافئین متوسط، رایحه بِری و گل ها، طعم یادمیوه ای ومرکبات وگلی",
    image_url: keniaMed,
    id: 104,
    price: 220,
    off_price: 120,
  },
  {
    name: "پرو دارک100%عربیکا",
    description: "تلخی زیاد، اسیدیته کم، کافئین متوسط، رایحه شکلاتی، طعم یادهای کاراملی و آجیلی",
    image_url: proDark,
    id: 105,
    price: 120,
    off_price: 100,
  },
  {
    name: "پرو مدیوم100%عربیکا",
    description: "تلخی متوسط، اسیدیته متوسط، کافئین متوسط، رایحه کاراملی، طعم یادهای میوه ای و آجیلی",
    image_url: proMed,
    id: 106,
    price: 120,
    offPrice: 120,
  },
  {
    name: "اوگاندا مدیوم ربوستا",
    description: "تلخی بالا، اسیدیته کم، کافئین بالا، رایحه زیاد، طعم یاد شکلاتی، تن واری بالا (غلظت)",
    image_url: oganda,
    id: 107,
    price: 140,
    off_price: 120,
  },
  {
    name: "سوماترا دارک100%عربیکا",
    description: "تلخی بالا، اسیدیته پایین، کافئین متوسط، رایحه شکلاتی، طعم یادهای آجیلی و ادویه ای",
    image_url: somatra,
    id: 108,
    price: 150,
    off_price: 120,
  },
  {
    name: "نیکاراگوئه‌مدیوم100%",
    description: "تلخی متوسط، اسیدیته متوسط رو به بالا، کافئین بالا، رایحه گل ها، طعم یاد گلی وکاراملی وشکلاتی",
    image_url: nikaragoe,
    id: 109,
    price: 120,
    off_price: 20,
  },
];