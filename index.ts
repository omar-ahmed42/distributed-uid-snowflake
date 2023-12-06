import { UidConfiguration, UidGenerator } from './uid';

const uidConfiguration: UidConfiguration = new UidConfiguration(1, 1);
const uidGenerator: UidGenerator = new UidGenerator(uidConfiguration);

export { uidGenerator };

