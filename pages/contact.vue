<template>
  <div class="contact container">
    <div class="contact-box">
      <div class="bg-light title-box">
        <h1>CONTACT US</h1>
        <P
          >Contact us via contact information or Submit a contact form <br />
          Submit a contact form</P
        >
        <div class="png-box">
          <img src="../assets/call.png" class="png" alt="" />
          <h3>01786781149</h3>
        </div>
        <div class="png-box">
          <img src="../assets/email.png" class="png" alt="" />

          <h3>imdmahmudul237@gmail.com</h3>
        </div>
        <div class="png-box">
          <img
            src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956422.jpg"
            class="png"
            alt=""
          />
          <h3>Sirajgonj, Rajshahi</h3>
        </div>
        <div class="social-png">
          <a href="https://www.linkedin.com/in/md-mahmudul-islam-4aa63323b/">
            <img
              src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/mdmahmudul.uslam.1/">
            <img src="../assets/instragram.png" alt="" />
          </a>

          <a href="https://www.facebook.com/mdmahmudul.uslam.1/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/watch?v=fkQWcCpfr8Y">
            <img src="../assets/youtubee.png" alt="" />
          </a>
        </div>
      </div>
      <div class="form-container">
        <form action="#">
          <div class="input-box">
            <label for="#">Name</label>
            <div class="wrapper-box">
              <input
                type="text"
                class="input"
                id=""
                placeholder="Enter your name"
              />
              <img src="../assets/name.png" class="content-box" alt="" />
            </div>
          </div>
          <div class="input-box">
            <label for="#">Email</label>
            <div class="wrapper-box">
              <input
                type="text"
                class="input"
                id=""
                placeholder="Enter Your email"
              />
              <img src="../assets/emal.png" class="content-box" alt="" />
            </div>
          </div>
          <div class="input-box">
            <label for="#">Phone:</label>
            <div class="wrapper-box">
              <input
                type="text"
                class="input"
                id=""
                placeholder="Enter your phone number"
              />
              <img src="../assets/call.png" class="content-box" alt="" />
            </div>
          </div>
          <div class="input-box">
            <textarea
              name=""
              id="text-area"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button class="btn-secondery width">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.contact-box {
  display: flex;

  justify-content: center;
  gap: 2rem;
}
.contact {
  margin-top: 5rem;
  padding: 2rem;
  background-image: linear-gradient(
    180deg,
    rgba(28, 56, 214, 0.842),
    rgb(241, 232, 232)
  );

  border-radius: 5px;
}
.contact-box h1 {
  font-weight: 900;
  margin-top: auto;
  font-size: 3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.contact-box p {
  font-size: 1.3rem;
  padding: 2rem 0;
}
.contact-box .png {
  width: 40px;
  height: 40px;
  margin-right: 0.7rem;
  text-align: center;
}

/* .contact-box .contact-box h3 {
  margin-right: auto;
} */
.content-box {
  width: 25px;
  height: 25px;
  color: #ccc;
  padding: 0.975rem 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
}
.wrapper-box {
  padding: 0.5rem;
  position: relative;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.input {
  width: 100%;
  height: 100%;
  padding-left: 3rem;
  font-size: 1.1rem;
  position: absolute;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;

  top: 0;
  right: 0;
}
.input-box {
  margin-bottom: 0.5rem;
}
label {
  display: block;
  margin: 0.5rem;
}
.form-container {
  width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 5px;
}
#text-area {
  width: 100%;
  height: 150px;
  outline: none;
  padding: 0.7rem;
  margin-top: 0.9rem;
  box-sizing: border-box;
}
.width {
  width: 100%;
}
.bg-light {
  color: white;
}
.png-box {
  display: flex;
  align-items: center;
  color: white;
}
.png-box img {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  color: white !important;
}
.social-png img {
  margin-top: 2rem;
  margin-right: 1.5rem;
  width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0.7rem;
  display: inline-block;
}
.social-png img:hover {
  border: 1px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
}
</style>