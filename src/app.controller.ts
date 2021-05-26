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
import { AppService, Movie, Partner } from './app.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { HttpService } from '@nestjs/common';
import { Response } from 'express';

import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';
import {  Req } from '@nestjs/common';
import { Request } from 'express';



export class Cat {
  name: string;

  @ApiProperty({ example: 23, description: 'x1' })
  x1: number;

  // @ApiProperty({ example: 51, description: 'x2' })
  // x2: number;
}


@ApiBearerAuth()

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService , private readonly httpService: HttpService,) {}

  @Get('/movies')
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }


@Get('/test/:x1')

@ApiResponse({
  status: 200,
  description: 'Multiply x1 by 12',
  type: Cat,
})
@ApiProperty({
  description: 'x1',
  minimum: 1,
  default: 1,
})

produs(@Param('x1') x1:number ): any {

  return("Rezultatul este inmultirii dintre x1 si 12 este = "+x1*12);
}

// validare cod iban
@Post('/iban/:x1/')
iban(@Param() params): any {
  
  let x1 = params.x1.substring(0,4);
  let x2 = params.x1.substring(4,24);
  let x3 = x2 + x1;


var x4=x3.replace(/A/g,"10");
x4=x4.replace(/B/g,"11");
x4=x4.replace(/C/g,"12");
x4=x4.replace(/D/g,"13");
x4=x4.replace(/E/g,"14");
x4=x4.replace(/F/g,"15");
x4=x4.replace(/G/g,"16");
x4=x4.replace(/H/g,"17");
x4=x4.replace(/I/g,"18");
x4=x4.replace(/J/g,"19");
x4=x4.replace(/K/g,"20");
x4=x4.replace(/L/g,"21");
x4=x4.replace(/M/g,"22");
x4=x4.replace(/N/g,"23");
x4=x4.replace(/O/g,"24");
x4=x4.replace(/P/g,"25");
x4=x4.replace(/Q/g,"26");
x4=x4.replace(/R/g,"27");
x4=x4.replace(/S/g,"28");
x4=x4.replace(/T/g,"29");
x4=x4.replace(/U/g,"30");
x4=x4.replace(/V/g,"31");
x4=x4.replace(/W/g,"32");
x4=x4.replace(/X/g,"33");
x4=x4.replace(/Y/g,"34");
x4=x4.replace(/Z/g,"35");


var x6: number = +x4;

var sameBigint = BigInt(x4) ;
var constanta = BigInt("97") ; 
var x7 = sameBigint%constanta ;

if (x7==BigInt("1"))
{
  console.log('Iban valid')
  return(true)
}
else 
{
  console.log('Iban invalid')
  return(false)
}
}

  @Get('/partners')
  getPartners(): Partner[] {
    return this.appService.getPartners();
  }


  @Get('/login')
  async bar(): Promise<any> {
      const response = await this.httpService.get('https://api.github.com/users/paztek').toPromise();

      return response.data;
  }

  @Post('/anaf/:cui')
  //async create(@Req() request: Request): Promise<string> 
  async create (@Param() params, @Res({ passthrough: true }) res: Response): Promise<string>
  {

    let date: Date = new Date(); 
    let date_formated = date.toISOString().split('T')[0]
    let x = 'test';
 


    const rezultat:any = Axios
     .post('https://webservicesp.anaf.ro/AsynchWebService/api/v5/ws/tva', 
      [
        {
            "cui": params.cui,
            "data": date_formated
        }
    ]  
     )
     .then(async res => {
          
          const correlationId = res.data.correlationId;
         // console.log(correlationId);
          const response = await this.httpService.get('https://webservicesp.anaf.ro/AsynchWebService/api/v5/ws/tva?id=' + correlationId).toPromise();

        let y  = response.data;
        let cod  = response.data.cod;
        const json = JSON.stringify(response.data);

        // console.log("rezultatul este : " + response.data.found[0].denumire);

        if (!response.data.found[0].denumire) {
          console.log("naspa ... ");
          throw new HttpException('Nu exista acest CUI in baza de date ANAF', HttpStatus.NOT_FOUND);
         // throw new RpcException('Invalid credentials.');
          //  throw new HttpException({
          //   status: HttpStatus.NO_CONTENT,
          //   error: 'No content',
          // }, HttpStatus.NO_CONTENT);

        }
        else {
          return json;
        }
        //console.log(y);
        //console.log(json); 
        //console.log(request);
        })
        // .catch(err => {
        //   console.log('error in request', err);
        // });
        
        return rezultat; 
        //return JSON.stringify(rezultat); 
  }

  @Get('/gigi')
  gigi2(): any {
    
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN);

}

}



@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}