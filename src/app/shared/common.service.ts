import { Injectable } from '@angular/core';


@Injectable()
export class CommonService {
    constructor() { }
   
    getMonthLabel(date){
        if(!date) return '';
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 
        'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = date.getMonth();
        return months[month];
    }
}