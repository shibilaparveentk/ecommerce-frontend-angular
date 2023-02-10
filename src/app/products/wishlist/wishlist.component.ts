import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishList:any
  eMsg:string=''

  constructor(private api:ApiService ,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      //success response
      (data:any)=>{
        this.wishList=data.result
        if(this.wishList.length==0){
          this.eMsg='empty wishlist'
        }
      },
      //client error
      (data:any)=>{
        this.eMsg=data.error.message
      }
    )
  }

  //delete from wishlist
  
  deleteFromWishlist(product:any){
    this.api.deleteFromWishlist(product.id)
    .subscribe(
      (result:any)=>{
        this.wishList=result.wishlist
        if(this.wishList.length==0){
          this.eMsg='empty wishlist'
        }
        //alert(result.message)
        //method 1-auto refresh
        //window.location.reload();
        //method 2
        //this.router.navigateByUrl(['Wishlist']);
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

  //addtocart
  addToCart(product:any){
    this.cart.addToCart(product)
    this.deleteFromWishlist(product)
  }
}

