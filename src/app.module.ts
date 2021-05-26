import { HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { ScheduleModule } from '@nestjs/schedule';
// import {EmployeeRepository} from './employee/employee.repository';
import { CronService } from './cron/cron.service';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'razvan',
      password: 'Vasilica#25',
      database: 'api_local',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      // type: 'mysql',
      // host: '10.0.1.245',
      // port: 3306,
      // username: 'apiv4usr',
      // password: 'Tinmar_2K21',
      // database: 'apiv4',
      // entities: [],
      // synchronize: true,
      // autoLoadEntities: true,
    }),
    EmployeeModule,
  ],
  // providers: [CronService],
  // controllers: [AppController, EmployeeController],
  // providers: [AppService, EmployeeService],
})
export class AppModule {}