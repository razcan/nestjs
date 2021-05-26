import { Connection, Repository } from 'typeorm';
import { Employee } from './employee.entity';

export const photoProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Employee),
    inject: ['DATABASE_CONNECTION'],
  },
];