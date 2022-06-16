import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-express';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      plaground: true,
      typePaths: ['./**/*.graphql'],
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
