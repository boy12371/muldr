//Dummy content shows up if database is empty
if (Links.find().count() === 0) {
  Links.insert({
    title: "Hack the Hearst",
    url: "http://hackthehearst.berkeley.edu/",
    summary: "",
    tags: ["Museums","API"],
    tagId: ["Eaw7qkdvF8tmPBpcw","mNdkZaqQ5hs4kr6wn"]
  });

  Links.insert({
    title: "MET Digital Media Department",
    url: "http://www.metmuseum.org/about-the-museum/museum-departments/office-of-the-director/digital-media-department",
    summary: "",
    tags: ["Museums"],
    tagId: ["mNdkZaqQ5hs4kr6wn"]
  });

  Links.insert({
    title: "MET App",
    url: "http://www.metmuseum.org/visit/met-app",
    summary: "",
    tags: ["Mobile"],
    tagId: ["Eaw7qkdvF8tmPBpcw","uQrDzMTDSwEak5ygS"]
  });
}

if (Tags.find().count() === 0) {
  Tags.insert({
    title: "Museumsss"
  });
  Tags.insert({
    title: "APIss"
  });
  Tags.insert({
    title: "Mobiless"
  });
}


