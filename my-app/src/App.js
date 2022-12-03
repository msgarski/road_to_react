import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import React from "react";

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
  {
    title: "angumentor",
    url: "https://angular.org/",
    num_comments: 49,
    points: 9,
    objectId: 3,
  },
  {
    title: "vuerecreaator",
    url: "https://angular.org/",
    num_comments: 49,
    points: 9,
    objectId: 4,
  },
  {
    title: "aninicanicos",
    url: "https://angular.org/",
    num_comments: 49,
    points: 9,
    objectId: 5,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("react");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = arr.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <ul>
        <List list={searchedStories} />
      </ul>
      <Search search={searchTerm} onSearch={handleSearch} />
    </div>
  );
}

export default App;
