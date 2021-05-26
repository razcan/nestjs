import { Body,
    Controller,
    Delete,
    Catch,
    Get,
    Param,
    Post,
    Put,
    Res, HttpStatus,HttpException,ExceptionFilter,ArgumentsHost
  } from '@nestjs/common';
  import { CreateEmployeeDto } from './dto/create-employee.dto';
  import { EmployeeService } from './employee.service';
  import { Employee } from './Employee.entity';

  import { HttpService } from '@nestjs/common';
  import { Response } from 'express';
  import {  Req } from '@nestjs/common';
  import { Request } from 'express';
  import {getManager} from "typeorm";



@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService,){}


    @Get('angajati')
    findAllEmployee(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get('angajat/:id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Get('angajatdif/:id')
  findOneDif(@Param('id') id: string) {
    return this.employeeService.findOneDif(id);
  }


  

}


