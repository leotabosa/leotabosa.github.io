import emailjs from 'emailjs-com'

function sendMail({ fromName, fromEmail, message }) {
  emailjs.init('user_B4IpikUBKwHITVOZRCPxu')

  emailjs.send('service_ogvzl0t', 'template_4s8ffar', {
    to_name: 'Leonardo',
    from_name: fromName,
    from_email: fromEmail,
    message,
  })
}

export default sendMail
