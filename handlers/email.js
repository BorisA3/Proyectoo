// Importar los módulos requeridos
const emailConfig = require("../config/mailtrap");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const util = require("util");

// Configurar la capa de transporte del correo
const transport = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: false,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

// Template para el envío del correo
transport.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".hbs",
      partialsDir: `${__dirname}/../views/emails`,
      layouts: `${__dirname}/../views/emails`,
      defaultLayout: "",
    },
    viewPath: `${__dirname}/../views/emails`,
    extName: ".hbs",
  })
);
