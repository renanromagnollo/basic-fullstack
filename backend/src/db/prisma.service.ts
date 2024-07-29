import { Global, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  @Global()
  @Injectable()
  async enableShutdownHooks(app) {
    this.$on('beforeExit', async () => {
      app.close();
    });
  }
}
