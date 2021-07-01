import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productList: any,args: string): any {
    if(!args) {
      return productList;
    }
    return productList.filter((item:any)=> item.productName.toLowerCase().indexOf(args.toLowerCase())>-1)

    return null;
  }

}
