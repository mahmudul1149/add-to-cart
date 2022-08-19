<template>
  <div class="about container mt-3">
    <div class="box-container">
      <div class="image-box">
        <img src="../assets/meet.png" alt="" />
      </div>
      <div class="about-box">
        <h1>OUR MISSION</h1>

        <p>
          You must have searched across eCommerce platforms to find the best
          price once in a while. We know it’s tiring. We have done this too and
          we decided to solve this problem. When you search for a product on
          Mullokoto it shows comparative results from top eCommerce platforms.
          You can further filter the results based on price and listing dates.
          We, Mullokoto Team, are continuously updating the product database so
          that you always get the best deals. Oh, I almost forgot. It’s
          completely free! So, what are you waiting for? Explore Mullokoto now
          and purchase your favorite products at the best price.
        </p>
      </div>
    </div>
    <div class="contact-form">
      <h2>INTERESTED WORK WITH US ?</h2>

      <button class="btn-dark">
        <nuxt-link class="btn-sec" to="/contact">Contact us</nuxt-link>
      </button>
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mt-3 {
  margin-top: 4rem !important;
}
.about .box-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}
.about .image-box img {
  margin-top: 4rem;
  width: 600px;
  height: 500px;
  display: inline-block;
  background-size: cover;
  background-position: no-repeat;
}
.about .about-box {
  width: 600px;
}
.about .about-box h1 {
  color: #1dec0a;
  font-size: 2rem;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.about .about-box p {
  line-height: 1.4;
  font-size: 1.4rem;
  color: rgb(52, 6, 180);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.contact-form {
  text-align: center;
  margin-top: 3rem;
}
.contact-form h2 {
  color: #960276e0;
}
.btn-dark {
  border: none;
  outline: none;
 margin-top: 1rem;
 background: transparent;
}
.btn-dark .btn-sec  {
   border-radius: 35px;
  background: green;
  text-align: center;
  display: inline block;
  display: flex;
  align-items: center;
  gap: .5rem;
 padding: .7rem 1rem;
 color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 text-decoration: none;
 font-size: 1.1rem;
 transition: .3s ease-in;
}
.btn-dark .btn-sec:hover {
  background: white;
  color: #333;
  border: 1px solid #333;
  box-shadow:inset 0 0 5px black;
}
@media screen and (max-width: 800px) {
  .about .box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-box p {
    padding: 0 2rem;
    margin: 2rem;
  }
  .about-box h1 {
    padding: 0 2rem;
    margin: 2rem;
  }
  .about .image-box img {
    padding: 2rem;
    margin: 2rem;
  }
  .contact-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
  .contact-box .form-container {
    width: 100%;
  }
  .contact-box .title-box {
    width: 100%;
  }

  
  .sidebar {
    display: none;
  }
}
</style>