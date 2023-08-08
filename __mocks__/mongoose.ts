import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, connect } from 'mongoose';
//objetos para construir una simulación de base de datos en mongo
let mongod: MongoMemoryServer;
let mongoConnection: Connection;

beforeAll(async () => {
  if (global.mongod) return;
  mongod = await MongoMemoryServer.create({
    instance: { launchTimeout: 60000 },
  });
  const URI = mongod.getUri();
  mongoConnection = (await connect(URI)).connection;
  global.mongod = mongod;
  global.mongoConnection = mongoConnection;
});

afterAll(async () => {
  try {
    setTimeout(async () => {
      await mongoConnection.destroy();
      await mongod.stop();
    }, 10000);
  } catch (e) {
    console.log('e', e);
  }
});
