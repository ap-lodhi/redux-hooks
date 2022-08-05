import React from 'react'
import { useState } from 'react';
import data from '../db.json'
import './Restaurant.css'

const Restaurant = () => {
    const Data =data.data;
    const [rating,setRating] = useState("")
    const [sort,setSort] = useState("")
    const [pay,setPay] = useState("")
    const [costSort , setCostSort] = useState("")


   
   
    return (
    <div>
      <h1>Restaurant</h1>
      <hr />
      <div className="buttons">
      <div>
      <h4>Filter by Rating</h4>
      <button onClick={() => setRating(1)}>1</button>
      <button onClick={() => setRating(2)}>2</button>
      <button onClick={() => setRating(3)}>3</button>
      <button onClick={() => setRating(4)}>4</button>
      <button onClick={() => setRating('')}>No fliter</button>
      </div>
      <div>
        <h4>Sort by rating</h4>
        <button onClick={() => setSort('asc')}>sort</button>
        <button onClick={() => setSort('')}>No Sort</button>
      </div>
      <div>
        <h4>Sort by payment</h4>
        <button onClick={() => setPay("card")}>Card</button>
        <button onClick={() => setPay("cash")}>Cash</button>
        <button onClick={() => setPay("upi")}>Upi</button>
        <button onClick={() => setPay("all")}>All</button>
      </div>
      <div>
        <h4>Sort by cost</h4>
        <button onClick={() => setCostSort("desc")}>High to Low</button>
        <button onClick={() => setCostSort("asc")}>Low To High</button>
      </div>
      </div>
      <br />
      <hr />
      <br />
      <div className='body'>
      {
        (rating && sort)?Data.filter(el => el.rating>rating && el.rating<rating+1).sort((a,b) => {return a.rating - b.rating}).map((e)=>(
          <div className='container'>
           <div>
            <img id='pic' src={e.rest_img} alt="pic" />
           </div>
           <div className='details'>
            <h2>{e.rest_name}</h2>
            <p className='colorLight'>{e.categories}</p>
            <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
            <p>{
              (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
            }</p>
           </div>
           <div className='review'>
            <h3 id='rating'>{e.rating}</h3>
            <p>{e.total_votes} Votes</p>
            <p>{e.reviews} Reviews</p>
  
           </div>
          </div>
      )):(rating && !sort)?Data.filter(el => el.rating>rating && el.rating<rating+1).map((e)=>(
        <div className='container'>
         <div>
          <img id='pic' src={e.rest_img} alt="pic" />
         </div>
         <div className='details'>
          <h2>{e.rest_name}</h2>
          <p className='colorLight'>{e.categories}</p>
          <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
          <p>{
            (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
          }</p>
         </div>
         <div className='review'>
          <h3 id='rating'>{e.rating}</h3>
          <p>{e.total_votes} Votes</p>
          <p>{e.reviews} Reviews</p>

         </div>
        </div>
    )):(pay==="cash")?Data.filter(el => el.payment_method.cash===true).map((e)=>(
      <div className='container'>
       <div>
        <img id='pic' src={e.rest_img} alt="pic" />
       </div>
       <div className='details'>
        <h2>{e.rest_name}</h2>
        <p className='colorLight'>{e.categories}</p>
        <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
        <p>{
          (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
        }</p>
       </div>
       <div className='review'>
        <h3 id='rating'>{e.rating}</h3>
        <p>{e.total_votes} Votes</p>
        <p>{e.reviews} Reviews</p>

       </div>
      </div>
  )):(pay==="card")?Data.filter(el => el.payment_method.card===true).map((e)=>(
    <div className='container'>
     <div>
      <img id='pic' src={e.rest_img} alt="pic" />
     </div>
     <div className='details'>
      <h2>{e.rest_name}</h2>
      <p className='colorLight'>{e.categories}</p>
      <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
      <p>{
        (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
      }</p>
     </div>
     <div className='review'>
      <h3 id='rating'>{e.rating}</h3>
      <p>{e.total_votes} Votes</p>
      <p>{e.reviews} Reviews</p>

     </div>
    </div>
)):(pay==="upi")?Data.filter(el => el.payment_method.upi===true).map((e)=>(
  <div className='container'>
   <div>
    <img id='pic' src={e.rest_img} alt="pic" />
   </div>
   <div className='details'>
    <h2>{e.rest_name}</h2>
    <p className='colorLight'>{e.categories}</p>
    <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
    <p>{
      (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
    }</p>
   </div>
   <div className='review'>
    <h3 id='rating'>{e.rating}</h3>
    <p>{e.total_votes} Votes</p>
    <p>{e.reviews} Reviews</p>

   </div>
  </div>
)):(pay==="all")?Data.filter(el => el.payment_method.upi===true || el.payment_method.cash===true || el.payment_method.card===true ).map((e)=>(
  <div className='container'>
   <div>
    <img id='pic' src={e.rest_img} alt="pic" />
   </div>
   <div className='details'>
    <h2>{e.rest_name}</h2>
    <p className='colorLight'>{e.categories}</p>
    <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
    <p>{
      (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
    }</p>
   </div>
   <div className='review'>
    <h3 id='rating'>{e.rating}</h3>
    <p>{e.total_votes} Votes</p>
    <p>{e.reviews} Reviews</p>

   </div>
  </div>
)):(sort && !rating)?Data.sort((a,b) => {return a.rating - b.rating}).map((e)=>(
      <div className='container'>
       <div>
        <img id='pic' src={e.rest_img} alt="pic" />
       </div>
       <div className='details'>
        <h2>{e.rest_name}</h2>
        <p className='colorLight'>{e.categories}</p>
        <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
        <p>{
          (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
        }</p>
       </div>
       <div className='review'>
        <h3 id='rating'>{e.rating}</h3>
        <p>{e.total_votes} Votes</p>
        <p>{e.reviews} Reviews</p>

       </div>
      </div>
  )):(costSort === "asc")?Data.sort((a,b) => {return a.cost_for_two - b.cost_for_two}).map((e)=>(
    <div className='container'>
     <div>
      <img id='pic' src={e.rest_img} alt="pic" />
     </div>
     <div className='details'>
      <h2>{e.rest_name}</h2>
      <p className='colorLight'>{e.categories}</p>
      <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
      <p>{
        (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
      }</p>
     </div>
     <div className='review'>
      <h3 id='rating'>{e.rating}</h3>
      <p>{e.total_votes} Votes</p>
      <p>{e.reviews} Reviews</p>

     </div>
    </div>
)):(costSort === "desc")?Data.sort((a,b) => {return b.cost_for_two - a.cost_for_two}).map((e)=>(
  <div className='container'>
   <div>
    <img id='pic' src={e.rest_img} alt="pic" />
   </div>
   <div className='details'>
    <h2>{e.rest_name}</h2>
    <p className='colorLight'>{e.categories}</p>
    <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
    <p>{
      (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
    }</p>
   </div>
   <div className='review'>
    <h3 id='rating'>{e.rating}</h3>
    <p>{e.total_votes} Votes</p>
    <p>{e.reviews} Reviews</p>

   </div>
  </div>
)):Data.map((e)=>(
    <div className='container'>
     <div>
      <img id='pic' src={e.rest_img} alt="pic" />
     </div>
     <div className='details'>
      <h2>{e.rest_name}</h2>
      <p className='colorLight'>{e.categories}</p>
      <p className='colorLight'>cost Rs{e.cost_for_one} for one</p>
      <p>{
        (e.payment_method.card)&&(e.payment_method.cash)&&(e.payment_method.upi)? 'All Payment Type Accepted' :(e.payment_method.card)&&(e.payment_method.cash)?'Only Card And Cash Accepted':(e.payment_method.cash)&&(e.payment_method.upi)?'Only Cash And UPI Accepted':(e.payment_method.card)&&(e.payment_method.upi)?'Only Card And UPI Accepted':(e.payment_method.card)?'Only Card Accepted':(e.payment_method.upi)?'Only UPI Accepted':'Only Cash Accepted'
      }</p>
     </div>
     <div className='review'>
      <h3 id='rating'>{e.rating}</h3>
      <p>{e.total_votes} Votes</p>
      <p>{e.reviews} Reviews</p>

     </div>
    </div>
))
      }
      </div>
      <div>
        <h1>Add New Restaurent</h1>
      </div>
    </div>
    
  
  )

   
}

export default Restaurant
