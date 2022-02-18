import React from "react";
import styles from "./ServiceBox.module.css"

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "cup":
      getIcon = <img src={require('../../../assets/img/icon/iconCup.png').default}  alt="cup" />
      break;
    case "speed":
      getIcon = <img src={require('../../../assets/img/icon/iconSpeed.png').default} alt="speed"  />
      break;
    case "fire":
      getIcon = <img src={require('../../../assets/img/icon/iconFire.png').default}  alt="fire" />
      break;
    case "prise":
      getIcon = <img src={require('../../../assets/img/icon/iconPrise.png').default}  alt="prise" />
      break;
    default:
      getIcon = <img src={require('../../../assets/img/icon/iconLeading.png').default} alt="landing"  />
      break;
  }


  return (
    <div className={styles.block} className="flex flexColumn">
      <div className={styles.iconStyle}>{getIcon}</div>
      <h2  className={["font20 extraBold", styles.titleStyle].join(' ')}>{title}</h2>
      <p className={["font13", styles.subtitleStyle].join(' ')}>{subtitle}</p>
    </div>
  );
}