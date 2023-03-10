import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  //to hold all products
  allProducts:any=[]
  searchTerm:string=''

  constructor(private api: ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data:any)=>{
        this.allProducts=data.result
      }
    )

    this.api.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )

  }

  addToWishlist(product:any){
    this.api.addToWishlist(product)
    .subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
    }

    //addtocart(product)
    addToCart(product:any){
      this.cart.addToCart(product)

    }

  }

  
    
    




