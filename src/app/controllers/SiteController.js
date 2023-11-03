class SiteController{

    ///GET
    index(req,res){
        res.render('home');
    }


    search(req,res){
        res.send('Search')
    }
}


module.exports= new SiteController;