
var express=require('express')
var router=express.Router();

router.get('/',function(req,res,next){
    var x=Math.random()*100;
    var y=Math.random()*150;
    var z=Math.random()*300;

    var funcx=Math.fround(x);
    var funcy=Math.random(y);
    var funcz=Math.round(z);

    res.send(`Random no's are ${x}, ${y} and ${z} <br>
    Math.fround applied to ${x} is ${funcx} <br>
    Math.random applied to ${y} is ${funcy} <br>
    Math.round applied to ${z} is ${funcz}`);
});

module.exports=router;