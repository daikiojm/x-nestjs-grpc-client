import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoDir = join(__dirname, '..', 'protos');
export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'rpc',
    protoPath: '/rpc/rpc.proto',
    loader: {
      keepCase: true,
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      includeDirs: [protoDir],
    },
  },
};
