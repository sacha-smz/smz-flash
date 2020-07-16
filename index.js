module.exports = (req, res, next) => {
  Object.assign(res.locals, req.session.flash);
  delete req.session.flash;

  req.flash = {};

  next();

  req.session.flash = req.flash;
  req.session.save();
};
