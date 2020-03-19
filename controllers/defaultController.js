module.exports = {

    
    index: (req,res) => {
        res.render( 'index.ejs')
    },

    single: (req,res) =>{
        res.render('single.ejs')
    },

    project: (req,res) =>{
        res.render('project.ejs')
    },

    about: (req,res) =>{
        res.render('about.ejs')
    },

    contact: (req,res) =>{
        res.render('contact.ejs')
    },

    blog: (req,res) =>{
        res.render('blog.ejs')
    },

    main: (req, res) =>{
        res.render('main.ejs')
    },

    service: (req,res) =>{
        res.render('service.ejs')
    },

    err: (req,res) =>{
        res.render('404.ejs')
    }
}