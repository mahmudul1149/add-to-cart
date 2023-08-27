<template>
  <div class="about container">
    <div class="box-container">
      <div class="image-box">
        <img src="../assets/meet.png" alt="" />
      </div>
      <div class="about-box">
        <h1>OUR MISSION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          consequatur aut ratione iste maxime quia, harum et repellendus? Quod
          aspernatur quae, maxime libero placeat deserunt et commodi sit maiores
          ullam amet. Ipsum optio voluptatibus libero omnis aspernatur accusamus
          reiciendis eveniet tempora aperiam sed eligendi soluta, atque nemo
          nesciunt praesentium fugit! Deleniti, cupiditate eos ex quibusdam
          voluptatibus libero magnam dolorem dolores! Autem, modi voluptates
          debitis quam deleniti architecto repellendus doloremque perferendis
          recusandae ea delectus suscipit dolorem hic illum, exercitationem in
          laboriosam quos atque aut necessitatibus deserunt. Saepe porro ipsum
          impedit, consectetur iste nemo maxime molestias expedita atque
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
.about .box-container {
  height: 100vh;
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
  margin-top: 2rem;
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

.btn-dark .btn-sec {
  border-radius: 35px;
  background: green;
  text-align: center;
  display: inline block;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s ease-in;
}

.btn-dark .btn-sec:hover {
  background: white;
  color: #333;
  border: 1px solid #333;
  box-shadow: inset 0 0 5px black;
}

@media screen and (max-width: 500px) {
  .about .box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about .about-box {
    width: 400px;
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
    width: 300px;
    background-size: cover;
    background-position: no-repeat;
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
}
</style>
