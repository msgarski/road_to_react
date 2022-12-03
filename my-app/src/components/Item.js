const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>
          {props.item.title} {props.item.points}
        </a>
      </span>
    </li>
  );
};

export default Item;
