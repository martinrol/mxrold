import emailjs from 'emailjs-com'

export const onHandleSendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_mxrold', 'template_1cyjmfz', e.target, 'user_dRUN4n4ny7idTPbrdVRvs')
      .then((response) => {
         return response
      }, (error) => {
          return error
      });
      
      setTimeout(() => {
        e.target.reset()
      }, 2000)
}