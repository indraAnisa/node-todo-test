var env = process.env.NODE_ENV || "development";

if (env === "development") {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = "mongodb://localhost:27017/todosapp_db";
} else if (env === "test") {
  process.env.port = 3000;
  process.env.MONGODB_URI = "mongodb://joko:jokopret@ds021289.mlab.com:21289/todosapp_db";
} else {
  //production
  process.env.MONGODB_URI =
    "mongodb://joko:jokopret@ds021289.mlab.com:21289/todosapp_db";
}
