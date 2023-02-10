import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(allProducts: [], searcKey: string, propName: string): any[] {
    const result: any = []
    if (!allProducts || searcKey == '' || propName == '') {
      return allProducts
    }
    allProducts.forEach((product: any) => {
      if (product[propName].trim().toLowerCase().includes(searcKey.toLowerCase())) {
        result.push(product)
      }
    })
    return result;
  }
}
