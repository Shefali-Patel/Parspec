import { Component, ElementRef, ViewChild, OnInit, OnChanges, SimpleChanges, SimpleChange, DoCheck } from '@angular/core';
import { APIDataService } from './Services/apidata.service';
import { FilterPipePipe } from './Reusable/filter-pipe.pipe';
import { MatIconRegistry } from '@angular/material/icon';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges,DoCheck{
  title = 'ParspecAssignment';
  public list:any;
  public closeDrop:any = true;
  @ViewChild('serachField', { static: false }) searchbar: ElementRef<HTMLInputElement> = {} as ElementRef;
  searchText = '';
box:any;
  toggleSearch: boolean = false;
  constructor(private myservice :APIDataService) {}
  ngOnInit(): void {
    console.log('init');
    this.myservice.getAPIData().subscribe((params:any) =>{
      this.list = params;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, SimpleChange, "   new ", 'onchange' );
    const box = document.querySelector('.itemId') as HTMLDivElement | null;
    console.log(box?.innerHTML); // 👉️ Box 1
  }
  ngDoCheck(): void {
    console.log("   new ", 'odocheck' );
   this.box =  [...Array.from(document.querySelectorAll('.itemId'))];
    console.log(this.box?.innerHTML); // 👉️ Box 1
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
}
