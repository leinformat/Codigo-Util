window.addEventListener('message', event => {
   if(event.data.eventName === 'onFormSubmitted') return window.open('https://5835435.fs1.hubspotusercontent-na1.net/hubfs/5835435/Lifeline_Carepoint_Go_Program_Brochure_Download.pdf');
    return;
});<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25">
<g fill="none" fill-rule="evenodd">
    <path d="M0 0L25 0 25 25 0 25z"></path>
    <path fill="#757575" d="M4.444 3.125L3.125 4.444 11.181 12.5 3.125 20.556 4.444 21.875 12.5 13.819 20.556 21.875 21.875 20.556 13.819 12.5 21.875 4.444 20.556 3.125 12.5 11.181z"></path>
</g>
</svg>





.second-step {
    display: none;
  }
  form .hs-form-required {
      color:#041344;
  }
  .third-step {
    display: none;
  }
  .hbspt-form form{
    background-color: transparent;
    padding: 0 45px;
  }
  {# ---- Tab Form ---- #}
  .tabs-form{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #a8a8a8;
    margin-bottom: 45px;
  }
  
  .tabs-form p{
    padding-bottom:20px;
    flex-basis:33.3%;
    text-align:center;
    margin-bottom: -1px;
    font-size: 14px;
    letter-spacing: .5px;
    color: #a8a8a8;  
  }
  .tabs-form__active{
    border-bottom: 4px solid #214fc5;
    color: #214fc5 !important;
  }
  {# ---- Inputs ---- #}  
    .hs-form-field input[type=text], 
    .hs-form-field input[type=email], 
    .hs-form-field input[type=phone], 
    .hs-form-field input[type=number], 
    .hs-form-field input[type=tel], 
    .hs-form-field input[type=date],
    .hs-form-field select,
    .hs-form-field textarea {
      padding: 1rem;
      border: 1px solid rgb(169, 182, 218);
  }
  .next-button,
  .next-button-second,
  .prev-button,
  .prev-button-second{
    width:100%;
    text-align:center;
    padding: 1rem;
    text-decoration:none;
    font-size:21px;
    text-transform: uppercase;
  }
  .next-button:active,
  .next-button-second:active,
  .prev-button:active,
  .prev-button-second:active{
    background: #041444!important;
  }
  input[type=submit]{
    width:100%;
    text-align:center;
    padding: 1.5rem !important;
    text-decoration:none;
    font-size:21px !important;
    border: none !important;
    text-transform: uppercase !important;
  }
  input[type=submit]:active{
    background: #041444!important;
  }
  .prev-button,
  .prev-button-second{
    border:solid 1px #214fc6;
    margin-top:20px;
  }
  .submitted-message {
      border: 1px none #f4f0ec;
      padding: 45px;
      background-color: #fff;
      border-radius: 0px;
  }
  .popup-modal{
     background: rgba(0, 0, 0, 0.2);  
     position: fixed;
     top: 0;
     left: 0;
     height: 100vh;
     width: 100vw;
     transition: all .5s;
     justify-content: center;
     align-items: center;
     display:none;
  }
  .popup-modal__content{
    flex-basis:30%;
    background-color: #fff;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    min-height: 345px;
    border-radius: 4px;
    padding: 20px 30px 30px 30px;
    position:relative;
  }
  .popup-modal__text{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align:center;
  }
  .popup-modal__closed{
    position: absolute;
    right: 20px;
  }
  .popup-modal__image{
    margin-top:7%;
  }
  .popup-modal__btn-close{
    background-color: #fff !important;
    border:solid 2px #214fc6;
    color:#214fc6;
    padding: 10px 80px;
  }
  .popup-modal__btn-close:hover{
    background-color: #fff !important;
    border:solid 2px #214fc6;
    color:#214fc6;
  }