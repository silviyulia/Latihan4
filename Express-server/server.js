
const express = require("express");
const app = express();
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

const articles = [
  {
    id: 1,
    title: "belajar express.js untuk pemula",
    urlimage:
      "https://qit.software/wp-content/uploads/2024/07/0_m1voqp0ftcquflgw.png",
    description:
      "Express.js adalah framework web untuk Node.js yang dirancang untuk membangun aplikasi web dan API dengan cepat dan mudah. Express menyediakan berbagai fitur yang memudahkan pengembangan aplikasi web, seperti routing, middleware, dan template engine.",
    author: "raden walangsungsang",
  },
  {
    id: 2,
    title: "Membuat API dengan Node.js",
    urlimage:
      "https://quasa.io/storage/images/news/cuduZyndeCHbwtaalPsMu4OxQB5ucqNhaPVnNKjT.webp",
    description:
      " Untuk membuat API dengan Node.js, kita dapat menggunakan framework seperti Express.js yang menyediakan berbagai fitur untuk membangun API dengan mudah. Berikut adalah langkah-langkah dasar untuk membuat API dengan Node.js dan Express.js:",
    author: "Empu Gandring",
  },
];

//Endpoint untuk mendapatkan daftar artikel
app.get("/api/test/articles", (req, res) => {
  res.json({
    status: "success",
    data: articles,
  });
});
