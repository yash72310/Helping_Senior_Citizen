function schemeController(){
    return{
      async schemeindex(req,res){
        return res.render('scheme');
      }
    }
}

module.exports=schemeController;