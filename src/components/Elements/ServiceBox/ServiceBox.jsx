import React from "react";
import styled from "styled-components";
import styles from "./ServiceBox.module.css"

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "cup":
      getIcon = <img src={require('../../../assets/img/icon/iconCup.png').default} />
      break;
    case "speed":
      getIcon = <img src={require('../../../assets/img/icon/iconSpeed.png').default} />
      break;
    case "fire":
      getIcon = <img src={require('../../../assets/img/icon/iconFire.png').default} />
      break;
    case "prise":
      getIcon = <img src={require('../../../assets/img/icon/iconPrise.png').default} />
      break;
    default:
      getIcon = <img src={require('../../../assets/img/icon/iconLeading.png').default} />
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