import axios from "axios";
import React, { useEffect, useState } from "react";
import { PrimaryShop } from "../../components/Global/Buttons";
import {
  UniqueDesc,
  UniqueIntro,
  UniqueMain,
  UniqueWrapper,
} from "./ShopUnique.style";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button, TextField } from "@mui/material";

const ShopUniquePage = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState();
  const [showInformation, setShowInformation] = useState();
  const [showMoreInfo, setShowMoreInfo] = useState();
  const [showDiscussion, setShowDiscussion] = useState();
  const handlerInformation = () => {
    setShowInformation(true);
    setShowMoreInfo(false);
    setShowDiscussion(false);
  };
  const handelMoreInfo = () => {
    setShowInformation(false);
    setShowMoreInfo(true);
    setShowDiscussion(false);
  }
  const handelDiscussion = () => {
    setShowInformation(false);
    setShowMoreInfo(false);
    setShowDiscussion(true);
  }
  console.log(data);
  useEffect(() => {
    const fetch = async () => {
      try {
        axios
          .get(`https://api-coffee-flask.herokuapp.com/api/products?id=3`)
          .then((response) => {
            setData(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <UniqueMain className="containerp">
      <UniqueWrapper>
        <UniqueIntro>
          <div className="img">
            <img src={data.image_url} />
          </div>
          <div className="detail">
            <h4 className="title">{data.name}</h4>
            <h4 className="price">{data.price} تومان</h4>
            <Button variant="contained">افزودن به سبد خرید</Button>
            <div className="detailText">
              <span>
                <ShoppingCartCheckoutIcon />
              </span>
              <p>خرید به صورت آنلاین و ارسال پستی شرایط ارسال مرسوله</p>
            </div>
            <div className="detailText">
              <span>
                <LocalMallIcon />
              </span>
              <p>
                ارسال مرسوله های بالاتر از 300 هزار تومان فقط در شهر تهران
                رایگان خواهد بود
              </p>
            </div>
            <div className="detailText">
              <span>
                <AddCardIcon />
              </span>
              <p> خرید آنلاین با استفاده از درگاه های امن</p>
            </div>
          </div>
        </UniqueIntro>
        <UniqueDesc>
          <div>
            <Button onClick={handlerInformation}>توضیحات</Button>
            <Button onClick={handelMoreInfo}>اطلاعات بیشتر</Button>
            <Button onClick={handelDiscussion}>نظرات</Button>
          </div>
          {showMoreInfo ? (
            <div className="moreInfo">
              <ul className="label">
                <li>وزن</li>
                <li>محصولی از</li>
                <li>خاستگاه</li>
                <li>کافئین</li>
              </ul>
              <ul className="answer">
                <li>1 کیلو</li>
                <li>سه لایه سوپاپ دار</li>
                <li>قهوه ریو</li>
                <li>متوسط</li>
              </ul>
            </div>
          ) : showDiscussion ? (
            <div className="discussion">
              <h5>نقد و بررسی‌ها</h5>
              <h6>اولین کسی باشید که دیدگاهی می نویسد </h6>
              <TextField
                variant="outlined"
                multiline
                rows={5}
                fullWidth
                label="دیدگاه شما"
              />
              <TextField variant="outlined" label="نام" />
              <TextField variant="outlined" label="ایمیل" />
              <Button>ثبت</Button>
            </div>
          ) : (
            <div className="information">
              <p>
                قهوه دنیرو ریو، یک قهوه مدیوم ترکیبی از %100 عربیکا آمریکای
                لاتین و برشته متوسط رو به بالا (مدیوم-دارک)،تلخی متوسط، رایحه
                زیاد،غلظت زیاد و مناسب قهوه جوش‌های اسپرسو خانگی و صنعتی و
                فیلتری (dripper) موکا، فرنچ پرس می‌باشد
              </p>
            </div>
          )}
        </UniqueDesc>
      </UniqueWrapper>
    </UniqueMain>
  );
};

export default ShopUniquePage;
