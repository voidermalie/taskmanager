import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { selectUser } from '../../store/selectors';

const TaskPage = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Bonjour {user}, que dois-tu faire aujourd&apos;hui ?</h1>
      <TaskList />
    </div>
  );
};

export default TaskPage;
