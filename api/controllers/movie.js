module.exports = {
  getAll,
  create,
  update,
  del
};

function getAll(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var movies = [{
    title: "Big Lewowski",
    year: new Date()
  }];

  // this sends back a JSON response which is a single string
  res.status(200).json(movies);
}

function create(req, res) {
  var movie = {
    id: "12345",
  }
  res.status(201).json(movie);
}

function del(req, res) {
  res.status(204).send();
}

function update(req, res) {
  res.status(204).send();
}