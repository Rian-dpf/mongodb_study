const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/estudo_mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo conectado...");
  })
  .catch((err) => {
    console.log("Houve um erro: " + err);
  });

// Model
const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },

  sobrenome: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  idade: {
    type: Number,
    require: true,
  },

  pais: {
    type: String,
  },
});

mongoose.model("users", UserSchema);

// Criando novo usuário
const newUser = mongoose.model("users");

new newUser({
  nome: "Rian",
  sobrenome: "dos Passos",
  email: "rian@gmail.com",
  idade: 18,
  pais: "Brasil",
})
  .save()
  .then(() => {
    console.log("Usuário criado com sucesso!");
  })
  .catch((err) => {
    console.log("Houve um erro: " + err);
  });
