Template.postSubmit.events({
  "submit form": function(e, t){
    e.preventDefault();
    console.log("Event !!!");

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      flagged : false
    };

    //affectation de l'id après insertion en base
    post._id = Posts.insert(post);

    //Router.go redirige vers la page passée en argument avec le context passé en second argument.
    //Mais que se passe-t-il si un objet avec la même _id exist sur le server ?
    //Erreur d'insertion mais redirection vers un post auquel l'utilisateur n'a peut etre pas accès ?
    //---> Controler les droits à chaque arrivée sur une page
    Router.go("postPage",post);
  }
});
