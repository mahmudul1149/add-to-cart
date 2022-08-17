<template>
  <div>
    <div class="land-page container mt-2">
      <div class="content">
        <h2>Raining offers <br> for hot <br> summer!</h2>
        <p>25% of all Products</p>

        <button class="btn btnDiv">
          <router-link to="/wishlist"
          class="btn btn-buy">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="h-6 w-6 inline" fill="white" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width=""
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
            </path>
          </svg> Buy Now</router-link>
        </button>
      </div>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/lady-adding-items-into-cart-2709758-2268080.png"
        alt="">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  max-width: 1200px;
  margin: auto;
}
.mt-2 {
  padding-top: 4rem;
}
.land-page {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.land-page h2 {
  font-size: 2rem;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.land-page p {
  color: white;
  padding: 1rem 0;
  font-size: 1.3rem;
}

.land-page img {
  height: 25rem;
}

.land-page .add-cart {
  color: red !important;
}

.btn {
  cursor: pointer;
  border: none;
  outline: none;
    text-align: center;
}
.btnDiv {
  background: white;
  padding: 3px;
    border-radius: 35px;
}
.land-page .btn-buy {
   border-radius: 35px;
  background: red;
  text-align: center;
  display: inline block;
  display: flex;
  align-items: center;
  gap: .5rem;
 padding: .2rem 1rem;
 color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 text-decoration: none;
 font-size: 1.1rem;
 transition: .3s all;
}

 .land-page .btn-buy:hover {
	-webkit-animation: hoverbtn .5s linear;
			animation: hoverbtn .5s linear;
  }
  @keyframes hoverbtn {
	0% {
	  -webkit-transform: scale(1);
			  transform: scale(1);
	}
	25% {
	  -webkit-transform: scale(1.1);
			  transform: scale(1.1);
	}
	50% {
	  -webkit-transform: scale(0.95);
			  transform: scale(0.95);
	}
	75% {
	  -webkit-transform: scale(1.04);
			  transform: scale(1.04);
	}
	100% {
	  -webkit-transform: scale(1);
			  transform: scale(1);
	}
  }

</style>