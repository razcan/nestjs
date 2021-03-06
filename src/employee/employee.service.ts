
import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { getConnection } from "typeorm";
import { Employee } from './employee.entity';


@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private EmployeesRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = new Employee();
    employee.firstName = createEmployeeDto.firstName;
    employee.lastName = createEmployeeDto.lastName;

    return this.EmployeesRepository.save(employee);
  }


  async findAll(): Promise<Employee[]> {
    return this.EmployeesRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.EmployeesRepository.findOne(id);
  }

  async findOneDif(id: string) {

    // const firstUser = await getConnection()
    // .getRepository(Employee)
    // .createQueryBuilder("employee")
    // .where("employee.id = :id", { id: 3 })
    // .getOne();

    const param_id: number = +id;

    //examples: https://github.com/typeorm/typeorm/blob/master/docs/find-options.md#advanced-options

    const firstUser = await getConnection()
    .getRepository(Employee)
    .find({
      id: LessThan(param_id)
  });

    return firstUser;
  }

//connection.manager.query('CALL sp_someStoredProc(?, ?)', [user.id, user.something])
//CALL `api_local`.`GetAllEmployee`(1);

  async deleteById(id: string): Promise<void> {
    await this.EmployeesRepository.delete(id);
  }

  async call_procedure(id: string): Promise<void> {
    //return await this.EmployeesRepository.query("SELECT firstName FROM api_local.employee where employee.id = "+id);
     return await this.EmployeesRepository.query("CALL api_local.GetAllEmployee("+id+");");
  }

}