class NewsController{

    ///GET[new]
    index(req,res){
        res.render('news');
    }


    show(req,res){
        res.send('News detail!')
    }
}


module.exports= new NewsController;