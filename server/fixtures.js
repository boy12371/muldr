//Dummy content shows up if database is empty
if (Links.find().count() === 0) {
  Links.insert({ "url" : "http://google.com", "title" : "test", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "Ww6bySfQwruZLEMyW" });
  Links.insert({ "url" : "http://bing.com", "title" : "test 2", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "ttnzrSw4tP3e94htL" });
  Links.insert({ "url" : "http://alexharr.is", "title" : "test 3", "userId" : "W5zfdKFDdbFRGWR3E", "author" : "aharris", "_id" : "4RQHpmNreHkF2N9ZY" });
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


