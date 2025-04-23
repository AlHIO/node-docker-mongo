import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.development') });

import { startServer } from "./lib/server.js"

startServer();
