<template>
  <div class="about container">
    <div class="box-container">
      <div class="image-box">
        <img src="../assets/metting1.jpg" alt="" />
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
        <nuxt-link class="nuxt" to="/contact">Contact us</nuxt-link>
      </button>
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  background: transparent;
  margin-top: 1rem;
}
.btn-dark .nuxt {
  color: #333;
  padding: 1rem 2rem;
  text-decoration: none;
  border: 1px solid green;
  font-size: 1.1rem;
  border-radius: 5px;
}
.btn-dark .nuxt:hover {
  box-shadow: #3333 0 0 15px;
  background: green;
  color: #fff;
  transition: cubic-bezier(0.6, +0.28, 0.735, 0.045);
}
@media screen and (max-width: 900px) {
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

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
    margin-right: 0.5rem;
  }
  .cart li {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem;
    margin: 1rem;
  }
  .title {
    font-size: 1.1rem;

    margin-right: auto;
  }
  .price {
    margin-right: auto;
  }
  .category {
    margin-right: auto;
  }

  .cart .cart-image {
    width: 200px;
    height: 200px;
    text-align: center;
  }
  .cart .delete-image {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .sidebar {
    display: none;
  }
}
</style>