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
  res.status(201).json({});
}

function del(req, res) {
  res.status(200).json({});
}

function update(req, res) {
  res.status(200).json({});
}