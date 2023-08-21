const checkName = (req, res, next) => {
  // console.log("running checkName function: ")
  // console.log(req.body.name)
  // console.log(req.body)
  // console.log(req)
  if (req.body.name) { 
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  if (req.body.is_favorite === true || req.body.is_favorite === false || req.body.is_favorite === undefined) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};



module.exports = { checkBoolean, checkName };