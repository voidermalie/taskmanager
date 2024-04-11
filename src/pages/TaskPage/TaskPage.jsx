import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { selectUser } from '../../store/selectors';
import { fetchUser } from '../../store/Slice/userSlice';
import { useEffect } from 'react';

const TaskPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <h1>Bonjour {user}, que dois-tu faire aujourd&apos;hui ?</h1>
      <TaskList />
    </div>
  );
};

export default TaskPage;
