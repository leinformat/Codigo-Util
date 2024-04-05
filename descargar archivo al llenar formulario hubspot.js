window.addEventListener('message', event => {
     if(event.data.eventName === 'onFormSubmitted') return window.open('{{ module.form.url_field.href }}');                                                                       
      return;
    });