Router.configure({
  layoutTemplate:"layout",
  loadingTemplate:"loading",
  notFoundTemplate: 'notFound',
  waitOn:function () {
    return (Meteor.subscribe("posts"));
  }
});

//Route page par defaut
Router.route("/", {
  name:"postsList"
});

//Route pour afficher le detail d'un post
Router.route("/posts/:_id", {
  name:"postPage",
  data:function(){
     return Posts.findOne({"_id":this.params._id});
  }
});

//Route pour creer un post
Router.route("/submit", {
  name:"postSubmit"
});

var requireAuth = function () {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);  
    }
    else {
      this.render('accessDenied');
    }
  }
  else {
    this.next();
  }
};

Router.onBeforeAction ('dataNotFound', {only: 'postPage'});
Router.onBeforeAction (requireAuth, {only: 'postSubmit'});
