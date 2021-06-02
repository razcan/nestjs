import { Controller } from '@nestjs/common';
import { Body,
    Delete,
    Catch,
    Get,
    Param,
    Post,
    Put,
    Res, HttpStatus,HttpException,ExceptionFilter,ArgumentsHost
  } from '@nestjs/common';
  import {
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
  } from '@nestjs/common';
  import { FilesInterceptor } from '@nestjs/platform-express';
  import { Express } from 'express';
  import { SampleDto } from './sample.dto';


@Controller('file-upload')
export class FileUploadController {
   
     @Post('upload')
     @UseInterceptors(FilesInterceptor('files', 20))
     uploadFile(@UploadedFiles() files) {
        // console.log(files.originalname);
      return files.map(
          (files: { 
              originalname: any; 
              size: any;
              filename : any;
              path: any;
              mimetype: any;
        }) => [files.originalname, files.size]);
    // var names = files.map;
    // console.log("numele fisierelor sunt : " + names );
     }
     
}


