import "./App.css";

let arr = [
  {
    title: "react",
    url: "https://reactjs.org/",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "vuejs",
    url: "https://vuejs.org/",
    num_comments: 44,
    points: 45,
    objectId: 1,
  },
  {
    title: "angular",
    url: "https://angular.org/",
    num_comments: 49,
    points: 9,
    objectId: 2,
  },
];

function App() {
  console.log("udalo sie");
  return (
    <div>
      <ul>
        {arr.map((item) => {
          return (
            <li key={item.objectId}>
              {item.title} {item.url}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
