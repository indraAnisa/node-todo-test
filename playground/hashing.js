const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcyrpt = require('bcryptjs');

var password = '123abc!';

// bcyrpt.genSalt(10,(err,salt)=>{
//     bcyrpt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
// })

var hashedPassword = '$2a$10$9QbT9WEO8ah2Jr2c/4HDUuKajXJA25ZILCv/VoecA.qAOYkMKXpNC'

bcyrpt.compare(password,hashedPassword, (err,res)=>{
    console.log(res);
})
