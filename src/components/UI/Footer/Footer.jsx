import React from "react";
import {
  FooterContact,
  FooterIntro,
  FooterMain,
  FooterServices,
  FooterSymbol,
  FooterWrapper,
} from "./Footer.style";
import logo from "../../../assets/images/logo.png";
import symbol from "../../../assets/images/symbol.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterMain className="container">
      <FooterWrapper>
        <FooterIntro>
          <div>
            <img src={logo} />
          </div>
          <div>
            <p>
              قهوه ریو، اولین برند پیشرو در صنعت قهوه در کشور ایران که از سال
              1311، افتخار همراهی مشتریان خود را دارد. ریو نامی است به اعتبار
              مشتریان خود.. قهوه ریو تولید و عرضه کننده انواع قهوه کامرشیال (دمی
              و اسپرسو)، قهوه ترک، قهوه فوری و شکلات می‌باشد.
            </p>
          </div>
        </FooterIntro>
        <FooterServices>
          <h4 className="title">خدمات مشتریان</h4>
          <div>
            <Link to="/">حریم خصوصی</Link>
            <Link to="/">پرسش متداول</Link>
            <Link to="/">قوانین و مقررات</Link>
            <Link to="/">روش های ارسال و هزینه ها</Link>
          </div>
        </FooterServices>
        <FooterContact>
          <h4 className="title">همراهی با ما</h4>
          <div>
            <Link to="/">درخواست همکاری و استخدام</Link>
            <Link to="/">درخواست نمایندگی</Link>
            <Link to="/">درخواست عاملیت فروش</Link>
            <Link to="/">از کجا بخریم؟</Link>
          </div>
        </FooterContact>
        <FooterSymbol>
            <h4 className="title">نماد اعتماد الکترونیکی</h4>
            <div>
                <img src={symbol}/>
            </div>
        </FooterSymbol>
      </FooterWrapper>
    </FooterMain>
  );
};

export default Footer;
