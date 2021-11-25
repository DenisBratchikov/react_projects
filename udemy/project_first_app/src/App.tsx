import {useState} from 'react';
import FormController, {IFormControllerProps} from './components/AddUser/FormController';
import List, {IListItem} from './components/Users/List';

const DEFAULT_USERS: IListItem[] = [];

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const onAddUserHandler = ({name, age}: Parameters<IFormControllerProps['onAddUser']>[0]) => {
    const user: IListItem = {
      key: Math.random().toString(),
      name,
      age: parseInt(age, 10)
    }
    setUsers(prevUsers => prevUsers.concat(user));
  }

  return (
    <div>
      <FormController onAddUser={onAddUserHandler} />
      {users.length && <List users={users}/>}
    </div>
  );
}

export default App;
