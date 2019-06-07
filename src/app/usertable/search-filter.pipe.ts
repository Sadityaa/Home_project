import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter', 
    pure : false
})

export class SearchFilter implements PipeTransform{
    
    transform(value: any[], filterString:string, propName: string): any {
        if(value.length === 0 || filterString === ''){
            return value;
        }
        const search_Array = [];
        for(const user of value){
            if(user[propName] === filterString){
                search_Array.push(user); 
            }
        }
        return search_Array;
    }
}





