import Item from "./Item";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.objectId} item={{ ...item }} />;
      })}
    </ul>
  );
};

export default List;
