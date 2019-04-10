var nodemailer=require('nodemailer')

exports.sendMail=(url)=> {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'deepupadukone6@gmail.com',
               pass: 'Deepu@2497'
           }
       });
       const mailOptions = {
        from: 'deepupadukone6@gmail.com', // sender address
        to: 'bhavanab1506@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        text: '<p>Your html here</p>'+url// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}
