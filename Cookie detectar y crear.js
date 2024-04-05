function alertCookie(){
        var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)formCompleted\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        
        cookieValue ? popup.classList.remove('active') : popup.classList.add('active');
        console.log(document.cookie);
      }
      alertCookie();

      // CREATE Cookie, The cookie lasts 30 days
      document.cookie = "formCompleted=true;max-age=2592000";