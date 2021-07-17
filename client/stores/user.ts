import { store } from '@risingstack/react-easy-state';

interface UserStore {
  authenticated: boolean;
  id?: number;
  name?: string;
  email?: string;
}

const userStore: UserStore = store({
  authenticated: false,
});

export default userStore;
