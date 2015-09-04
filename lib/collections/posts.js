Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId,doc){
    return !!userId;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
