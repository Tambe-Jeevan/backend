import express from 'express';

const app = express();

// app.get("/", (req, res) => {
//   res.send("App Is Running");
// });

const port = process.env.PORT || 3000;

const App = app.get("/api/joke", (req, res) => {
  const joke = [
    {
        id: "1",
        jokename: "Joke 1",
        content: "This is Joke"
    },
    {
        id: "2",
        jokename: "Joke 2",
        content: "This is Joke"
    },
    {
        id: "3",
        jokename: "Joke 3",
        content: "This is Joke"
    },
    {
        id: "4",
        jokename: "Joke 4",
        content: "This is Joke"
    },
    {
        id: "5",
        jokename: "Joke 5",
        content: "This is Joke"
    },
     {
        id: "6",
        jokename: "Joke 6",
        content: "This is Joke"
    },
  ];
    
  
  res.send(joke);
});

App.listen(port, () => {
  console.log(`Server is ready ${port}`);
});
