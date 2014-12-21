//Dummy content shows up if database is empty
if (Links.find().count() === 0) {
  Links.insert({ "url" : "http://google.com", "title" : "A longer test title", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "Ww6bySfQwruZLEMyW", "tags" : ["Museums", "Mobile"], "type" : "app", "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur purus libero. Donec laoreet laoreet urna, vel ullamcorper purus dapibus nec. Nullam efficitur tristique venenatis. Etiam molestie, nunc non tristique condimentum, nibh nibh sodales justo, eget luctus dui tellus et dui. Sed eget tincidunt ipsum, nec sagittis purus. Praesent vestibulum enim ut eros aliquam, eget maximus sapien ullamcorper. Nam ultricies auctor erat sed placerat. Nam varius lacus nec dui cursus malesuada. Nullam nec nisl iaculis, malesuada ipsum nec, ullamcorper ex. Curabitur blandit nunc at consectetur dapibus. Mauris vitae odio purus. In hac habitasse platea dictumst. Donec sodales dictum euismod. Nulla ultricies pulvinar venenatis. Donec quis felis at nisi varius pretium at ac sapien. Etiam eu justo at orci pharetra tincidunt."});
  Links.insert({ "url" : "http://bing.com", "title" : "A thing, a thing, a thing thing", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "ttnzrSw4tP3e94htL", "tags" : ["Museums", "Mobile", "API"], "type" : "website", "text" : "Curabitur eget orci sit amet libero venenatis pulvinar. Aliquam semper vulputate ullamcorper. Phasellus consequat libero eu dui rhoncus maximus. Fusce congue cursus cursus. Aenean elementum nibh tincidunt velit aliquam venenatis. Mauris efficitur nunc massa. Morbi consequat semper arcu sit amet tempor." });
  Links.insert({ "url" : "http://alexharr.is", "title" : "No one can even really know anymore, yknow?", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "4RQHpmNreHkF2N9ZY", "tags" : ["Mobile"], "type" : "article", "text" : "Mauris id libero tortor. Donec tincidunt ultricies tellus, vulputate posuere massa accumsan et. Fusce ac diam vel sem malesuada mattis ut non eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam sit amet tempor eros, in egestas erat. Integer ornare velit gravida libero gravida varius. Vivamus id lorem augue. Vestibulum mollis elit eget tortor eleifend, a fermentum ex venenatis." });
}

if (Tags.find().count() === 0) {
  Tags.insert({
    title: "Museums"
  });
  Tags.insert({
    title: "API"
  });
  Tags.insert({
    title: "Mobile"
  });
}

if (Types.find().count() === 0) {
  Types.insert({
    title: "article"
  });
  Types.insert({
    title: "app"
  });
  Types.insert({
    title: "website"
  });
}


