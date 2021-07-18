import { store } from '@risingstack/react-easy-state';

interface OrganizationObject {
  id: number;
  name: string;
}

interface OrganizationStore {
  current: OrganizationObject | null;
  list: OrganizationObject[];
}

const organizationStore: OrganizationStore = store({
  current: null,
  list: [],
});

export default organizationStore;
