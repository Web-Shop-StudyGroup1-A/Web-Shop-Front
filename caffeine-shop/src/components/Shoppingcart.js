import React from 'react'
import '../styles/Shoppingcart.scss'

export default function ShoppingCart() {
  return (
    <>
    <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasLabel">Ostoskori</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

  <div className="cartItem">
  <div className="left">
    <ul>
      <li>Tuote</li>
      <li>Määrä: x</li>
      <li>Summa: y</li>
    </ul>
  </div>
  <div className="right">
    <img src="https://via.placeholder.com/300x300" />
  </div>
</div>
<p>Yhteensä: 94 589 eur</p>
    
    
    <button>Kassalle</button>
    
  </div>
  </>
  )
}
