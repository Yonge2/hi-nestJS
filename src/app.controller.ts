import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    //req, res 사용하는 방법 (express에 접근)
    //@Get()
    //home(@Req() req, @Res() res){}
    @Get()
    home(){
        return "Welcome to my movie API";
    }
}
