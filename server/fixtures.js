//Dummy content shows up if database is empty
if (Links.find().count() === 0) {
  Links.insert({
    title: "Hack the Hearst",
    url: "http://hackthehearst.berkeley.edu/",
    summary: ""
  });

  Links.insert({
    title: "MET Digital Media Department",
    url: "http://www.metmuseum.org/about-the-museum/museum-departments/office-of-the-director/digital-media-department",
    summary: ""
  });

  Links.insert({
    title: "MET App",
    url: "http://www.metmuseum.org/visit/met-app",
    summary: ""
  });
}

