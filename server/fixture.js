if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    flagged : false
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    flagged : false
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    flagged : false
  });

  Posts.insert({
    title: 'The Offense Book',
    url: 'http://offense.com',
    flagged : true
  });
}
