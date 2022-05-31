const todos = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false }
];

const withConditionalFeedback = ({
  loadingFeedback,
  noDataFeedback,
  dataEmptyFeedback
}) => (Component) => (props) => {
  if (props.isLoading) return <div>{loadingFeedback} || "Data Loading"</div>;

  if (!props.data) return <div>{noDataFeedback} || "No Data Loaded Yet"</div>;

  if (!props.data.length)
    return <div>{dataEmptyFeedback} || "Data is Empty"</div>;

  return <Component {...props} />;
};

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export const TodoList = {
  loadingFeedback: "Loading Todos.",
  noDataFeedback: "No Todos loaded yet.",
  dataEmptyFeedback: "Todos are empty."
}(BaseTodoList)(todos);
