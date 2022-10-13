
import "./App.css";


const comment = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR825JmllQgD__cQXRnvcNbsSmVEc4dvHijQ94Xlu25haFqadjgRsnUKZMsNRkL1hno2Ng&usqp=CAU",
    },
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVg-fHMa8C5eRcQwAm7vCPR9atTWLdlwCL4w&usqp=CAU",
    },
  },
  {
    id: 3,
    date: new Date().toLocaleDateString(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCo50C9e05pc1MfOOt6eJxAUQ2nOmPCM5OMQ&usqp=CAU",
    },
  },
];

function App() {
  return (
    <div className="App">
      {comment.map((item) => {
        return (
          <div className="zero" key={item.id}>
            <div className="second">
              <img src={item.author.avatarUrl} alt="" />
              <h1>{item.author.name}</h1>
            </div>
            <div className="wrapper">
              <p>{item.text}</p>
              <span>{item.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
