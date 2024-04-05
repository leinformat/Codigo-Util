function alertCookie() {
    console.log('------------');
    console.log(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa
    console.log('------------');
    let cookie = document.cookie;
    let arr = cookie.split(';');
  }
  
  
  
  // Detect Cookie
  function detectCookie(cname){
      let name  = cname+'=';
      let decodeCookie = decodeURIComponent(document.cookie);
      let ca = decodeCookie.split(';');
  
      for(let i = 0; i<ca.length; i++){
          let c = ca[i];
          while(c.charAt(0)== ' '){
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0 && (name.length != c.length)){
              return true;
          }
      }
      return false;
  }
  
  // SET COOKIE
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Remove Cookie
  function removeCookie(cname){
    setCookie(cname,"",0);
  }
  
  
  function deleteAllCookies() {
     var cookies = document.cookie.split(";");
     for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
          }
    console.log('aaa')
      }
  
  document.addEventListener("DOMContentLoaded", ()=>{
    console.log(detectCookie('_key'));
    
    console.log(document.cookie);
  });