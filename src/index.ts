import dayjs from 'dayjs';


console.log(dayjs().format('YYYY-MM-DD'))
const a : number = 1;

function decoratorFunc(target:any){
    target.prototype.a = 1;
}

@decoratorFunc
class b{

}