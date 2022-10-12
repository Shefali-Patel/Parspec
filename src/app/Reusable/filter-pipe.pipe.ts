import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
public isItems:boolean = false;
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    if(typeof(searchText)== 'string'){
      searchText = searchText.toLowerCase();
    }
    return items.filter( it => {
      it.items.map((res: any)=>{
        if(res.toLowerCase().includes(searchText)){
          this.isItems = true;
        }
      })
      return it.id.includes(searchText) || it.name.toLowerCase().includes(searchText) || it.address.toLowerCase().includes(searchText) ;
    });
  }

}
