import React, {useState} from "react";
import styles from "./Modal.module.css"
// Component
import Animates from "../Animates/Animates";

// Assets
import LogoIcon from "../../../assets/svg/Logo";
import FullButton from "../../Buttons/FullButton";


const Modal = (props) => {
    const [titleBtn, setTitleBtn] = useState('Надіслати')
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [messages, setMessages] = useState('');
    const axios = require('axios');
    
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      if(name !== "" && phone.length > 9 && (!isNaN(parseFloat(phone)) && isFinite(phone)))
      axios({
        method: 'post',
        url: './php/toMail.php',
        data: {
            name:name,
            phone: phone,
            message: messages
        }
    })
        .then(function (response) {
          setTitleBtn('Відправленно')
            console.log(response)  
        })
  
        .catch(function (error) {
          setTitleBtn('Помилка, спробуйте знову')
            console.log(error)
        });
  
      else
      setTitleBtn('Введіть коректні дані')  
  }
  

    return(
        <div className={props.show ? [styles.modalBlock, styles.active].join(' ') : styles.modalBlock}>
            <div className={styles.container}>
                <div className={styles.headerModal}>
                    <div className={styles.logoBlock}>
                        <LogoIcon/>
                        <span  className="font20 extraBold"> Doctype </span>
                    </div>
                    <div className={styles.closeModal} >
                        <FullButton 
                        type="submit"
                        title={
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        }  
                        className="pointer animate"
                        action={()=>{props.showModal()}}
                        />
                        
                    </div>
                </div>
                <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                <Animates animate="animate__fadeInUpBig" time="animate__faster" showInterest="1">
                <label className="font13">Ім'я</label>
                  <input type="text" id="fname" name="fname" className="font20 extraBold"  value={name} onChange={e => setName(e.target.value)} />
                </Animates> 
                <Animates animate="animate__fadeInUpBig" time="animate__fast" showInterest="1">
                  <label className="font13">Телефон:</label>
                  <input type="tel" id="tel" name="tel" className="font20 extraBold"  value={phone} onChange={e => setPhone(e.target.value)} />
                </Animates> 
                <Animates animate="animate__fadeInUpBig"  showInterest="1">
                  <label className="font13">Побажання:</label>
                  <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold"  value={messages} onChange={e => setMessages(e.target.value)} />
                </Animates> 
                <Animates animate="animate__fadeInUpBig" time="animate__slow"  showInterest="1">
                    <div className={styles.bottomForm}>
                    <FullButton type="submit" title={titleBtn}  />
                    </div>
                </Animates> 
              </form>
                </div>
            </div>
        </div>
    )

}

export default Modal

