import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';
import { uidGenerator } from '.';

const PROTO_PATH = path.resolve(__dirname, '..', 'protos', 'uid.proto');

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const generatorPackage: any = protoDescriptor.generator;

const server = new grpc.Server();

server.addService(generatorPackage.UID.service, {
  generateUid: (call: any, callback: any) => {
    const uid = uidGenerator.generate();
    callback(null, { value: uid.getId().toString() });
  },
});

function startServer(port: number) {
  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log(`Server running at http://0.0.0.0:${port}`);
      server.start();
    }
  );
}

export { startServer };

