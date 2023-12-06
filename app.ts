import * as dotenv from 'dotenv';
import { startServer } from './connection';

dotenv.config();

const port = process.env.PORT;
startServer(port);
