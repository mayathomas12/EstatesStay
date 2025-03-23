const express = require('express');  
const router = express.Router();  

router.post('/contact', async (req, res) => {  
    try {  
        const contactInfo = req.body;   
        console.log(contactInfo);  
        res.status(201).json({ message: 'Contact information received!', contactInfo });  
    } catch (error) {  
        res.status(500).json({ message: 'There was an error processing your request.' });  
    }  
});  

module.exports = router;  