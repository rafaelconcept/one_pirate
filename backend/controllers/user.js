const User = require('../models/User');
const md5 = require('md5');

module.exports = {
    
    async register(req, res) {
        
        if(!req.body.pass || !req.body.email){
            return res.json({error:'invalid'})
        }

        var pass = md5(req.body.pass);
            
        const userExists = await User.findOne({ email: req.body.email });
        if(userExists){
            return res.json({ criado:false });
        }

        const user = await User.create({
            email: req.body.email ,
            password: pass,
            /*
            nivel: 1,
            xp_atual: 0,
            xp_necessario:100,
            modulos:['m1','m2'],
            */
        });
              
        return res.json({ criado: true })

           
    }
};