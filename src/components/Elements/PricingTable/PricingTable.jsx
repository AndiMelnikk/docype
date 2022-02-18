import React from "react"; 
import styles from "./PricingTable.module.css"
// Components
import FullButton from "../../Buttons/FullButton";
// Assets
import CheckMark from "../../../assets/svg/Checkmark";

export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getIcon;

  switch (icon) {
    case "leading":
      getIcon = <img src={require('../../../assets/img/icon/iconLeading.png').default} alt="landing" />
      break;
    case "shop":
      getIcon = <img src={require('../../../assets/img/icon/iconShop.png').default} alt="shop"  />
      break;
    case "company":
      getIcon = <img src={require('../../../assets/img/icon/iconCompany.png').default} alt="company" />
      break;
    case "ads":
      getIcon = <img src={require('../../../assets/img/icon/iconPeople.png').default} alt="ads" />
      break;
    case "bot":
      getIcon = <img src={require('../../../assets/img/icon/iconBot.png').default} alt="bot" />
      break;
    case "app":
      getIcon = <img src={require('../../../assets/img/icon/iconApp.png').default} alt="app"  />
      break;
    default:
      getIcon = <img src={require('../../../assets/img/icon/iconLeading.png').default} alt="landingDefault"  />
      break;
  }

  return (
    <div className={["whiteBg radius8 shadow", styles.block ].join(' ')}>
      <div className={["flexSpaceCenter", styles.iconImg].join(' ')}>
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Детальніше" action={action} />
      </div>
    </div>
  );
}