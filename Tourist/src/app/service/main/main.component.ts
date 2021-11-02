
import { Component, OnInit } from '@angular/core';
import  {offers}  from '../main/places.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public places  : offers[] =[];
  public comparedPlaces : offers[] =[];
  searchText : any;  

  constructor()
    { 
      this.places.push(new offers(false,1,'../../assets/pic1.jpg','Delhi','p1',3,60000,10)); 
      this.places.push(new offers(false,2,'../../assets/pic5.jpg','Goa','p2',3,80000,10));
      this.places.push(new offers(false,3,'../../assets/pic4.jpg','Mumbai','p3',2,100000,5));
      this.places.push(new offers(false,4,'../../assets/pic9.jpg','Mumbai','p4',3,10000,2)); 
      this.places.push(new offers(false,5,'../../assets/pic8.jpg','Goa','p5',3,11000,3)); 
      this.places.push(new offers(false,6,'../../assets/pic2.jpg','Delhi','p6',4,10000,5)); 
      this.places.push(new offers(false,7,'../../assets/pic3.jpg','Delhi','p7',3,90000,8)); 
      this.places.push(new offers(false,8,'../../assets/pic7.jpg','Delhi','p8',4,12000,5)); 
      this.places.push(new offers(false,9,'../../assets/pic6.jpg','Jaipur','p9',3,18000,6)); 

    }

  ngOnInit(): void {
  }

  compare($event: any){
    const isChecked= $event.target.checked;
    const id=  $event.target.value;
    
    this.places= this.places.map((p)=>
    {
      if(p.id == id){
        p.select= isChecked;
        return p; 
      }
      return p;
    });
  }

  onClickSubmit() {
    this.comparedPlaces=[];
    let p=this.places.filter(x=> x.select=== true);
    if(p !== undefined ) {
      p.forEach(element => {
        this.comparedPlaces.push(new offers(element.select,element.id,element.image,element.place,element.packagename,element.noofdays,element.cost,element.discount));
      });
  }
  return this.comparedPlaces;
 }
 

}

