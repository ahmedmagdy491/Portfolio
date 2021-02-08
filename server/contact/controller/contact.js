const Contact = require('../model/contact')




exports.createContact = async (req,res)=>{
    const {name, email, subject, message, number} = req.body
    try {
       const contact = await Contact.create(req.body)
  
       res.status(201).json({
         data: contact
       })
       console.log('contact:', contact)
  
  
    
    } catch (err) {
      console.log("ERROR", err)
    }
  }