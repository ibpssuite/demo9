import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatTab} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import {  of } from 'rxjs';
import { Subject } from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { take ,takeUntil,tap} from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
import { RouterModule, Router } from '@angular/router';

 






/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  links=['Patna','Delhi','Hyderabad','Singapore','Mumbai','Goa'];
  testvariable:any=0;
  collectiondata:any[]=[];
  Records;
  



  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(http:HttpClient,private route : Router){
    http.get('https://my-json-server.typicode.com/typicode/demo/posts').subscribe(res=>this.Records=res
    );
  

  }
  navigatetoedit(name:string){
    this.route.navigate(['/ram',name]);
    console.log('In Navigate to edit block');
  }
  

  ngOnInit() {



    const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));







    const subject = new Subject<number>();
 
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
     
    subject.next(1);
    subject.next(2);



    const myObservable = of(1, 2, 3);
 
// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
 
// Execute with the observer object
myObservable.subscribe(myObserver);
// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification
    const click1 = fromEvent(document, 'click');
const positions = click1.pipe(
  tap(ev => console.log(ev)),
  map(ev => ev.type),
);
positions.subscribe(x => console.log(x));
    const interva = interval(1000);
const clicks2 = fromEvent(document, 'click');
const results = interva.pipe(takeUntil(clicks2));
results.subscribe(x => console.log(x));
    
const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(x => console.log(x));

    const nums = of(1, 2, 3,4,5,12,45,67,78);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    
    squaredNums.subscribe(x => console.log(x));
    
    // Logs
    // 1
    // 4
    // 9





    this.dataSource.paginator = this.paginator;
    const secondsCounter = interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe(n =>
  console.log(`It's been ${n} seconds since subscribing!`));
  

  const el = document.getElementById('my-element');
 
// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent(el, 'mousemove');
 
// Subscribe to start listening for mouse-move events
const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
 
  // When the mouse is over the upper-left of the screen,
  // unsubscribe to stop listening for mouse movements
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
});

// Create an Observable that will create an AJAX request
const apiData = ajax('/api/data');
// Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));


}



addtocollection(f){
  
this.collectiondata.push(f.value);
console.log(f);

}
firefromcollection(i:number){
  this.collectiondata.splice(i,1);
  console.log('DELETED');

}


  
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
