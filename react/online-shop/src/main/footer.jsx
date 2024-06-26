import phoneIcon from "../public/icons/phone.svg";
import atSign from "../public/icons/at-sign.svg";
import mapPin from "../public/icons/map-pin.svg";
import leftChevrons from "../public/icons/chevrons-left.svg";
import etemadSign from "../public/pictures/namad-etemad.png";
import samandehi from "../public/pictures/samandehi.png";
import "../public/css/shop/mainPage.css";

const Footer = () => {
  return (
    <>
      <div className="contacts">
        <h2 className="contactsTitle">اطلاعات تماس</h2>
        <div className="contactsDetail">
          <div className="mt-2 me-4" style={{ display: "inline-block" }}>
            <img src={phoneIcon} alt="phone" />
          </div>
          <div style={{ display: "inline-block" }} className="my-2 mx-1">
            <p className="contactsParagraph">09192300017</p>
          </div>{" "}
        </div>
        <div className="contactsDetail">
          <div className="mt-2 me-4" style={{ display: "inline-block" }}>
            <img src={atSign} alt="atSign" />
          </div>
          <div style={{ display: "inline-block" }} className="my-2 mx-1">
            <p className="contactsParagraph">expresscard.eshopping@gmail.com</p>
          </div>
        </div>
        <div className="contactsDetail">
          <div className="mt-2 me-4" style={{ display: "inline-block" }}>
            <img src={mapPin} alt="mapPin" />
          </div>
          <div style={{ display: "inline-block" }} className="my-2 mx-1">
            <p className="contactsParagraph">ایران - تهران</p>
          </div>
        </div>
      </div>
      <div className="links">
        <h2 className="contactsTitle">لینک های مهم</h2>
        <div className="divLinks">
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">راهنمای خرید</p>
            </div>
          </div>
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">قوانین و مقررات</p>
            </div>
          </div>
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">ثبت شکایت</p>
            </div>
          </div>
        </div>
        <div className="divLinks">
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">صفحه اینتاگرام</p>
            </div>
          </div>
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">کانال تلگرام</p>
            </div>
          </div>
          <div className="contactsDetail">
            <div className="mt-2 me-4" style={{ display: "inline-block" }}>
              <img src={leftChevrons} alt="leftChevrons" />
            </div>
            <div style={{ display: "inline-block" }} className="my-2 mx-1">
              <p className="contactsParagraph">اکانت لینکدین</p>
            </div>
          </div>
        </div>
      </div>
      <div className="symbols">
        <h2 className="contactsTitle">نماد های اعتماد</h2>
        <div className="divSymbols">
          <div className="contactsDetail">
            <div style={{ display: "inline-block" }}>
              <img className="picLogo" src={etemadSign} alt="etemadSign" />
            </div>
          </div>
        </div>
        <div className="divSymbols">
          <div className="contactsDetail">
            <div style={{ display: "inline-block" }}>
              <img className="picLogo" src={samandehi} alt="samandehiSign" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
