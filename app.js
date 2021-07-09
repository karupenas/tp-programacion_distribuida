var generarBD = require("./src/db/init");
generarBD();

var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const expressJSDocSwagger = require("express-jsdoc-swagger");

const options = {
  info: {
    version: "1.0.0",
    title: "TP Programacion Distrubuida",
    description: "Profesor: Martin Machuca",
  },
  security: {},
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: "./**/*.js",
  // URL where SwaggerUI will be rendered
  swaggerUIPath: "/api-docs",
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: "/v3/api-docs",
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
};

var librosRouter = require("./src/routes/librosController");
var sociosRouter = require("./src/routes/sociosController");
var autorRouter = require("./src/routes/autorController");
var generoRouter = require("./src/routes/generoController");
var editorialRouter = require("./src/routes/editorialController");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

expressJSDocSwagger(app)(options);

app.use("/libros", librosRouter);
app.use("/socios", sociosRouter);
app.use("/autor", autorRouter);
app.use("/genero", generoRouter);
app.use("/editorial", editorialRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
