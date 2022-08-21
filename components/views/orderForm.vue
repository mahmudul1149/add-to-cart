<template>
    <div>
        <div id="modal">
            <div class="backdrop" @click=" hideOrderForm" ></div>
            <div class="modalBody">
                <div class="formContainer" id="orderForm">
                    <form class="orderForm">
                        <h1>please submit here</h1>
                        <ul>
                            <li>
                                <input type="text" v-model="name" class="fieldStyle fieldSplit alignLeft"
                                    placeholder="Name" />
                                <input type="text" class="fieldStyle fieldSplit alignRight" placeholder="Phone no." />
                            </li>
                            <input type="hidden" class="fieldStyle fieldSplit alignRight" />
                            <li>
                                <textarea class="fieldStyle" placeholder="Address"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        data() {
         
        },
       
    },
    methods: {
        hideOrderForm() {
            this.$emit('toggleOrderForm')
        }
    }
}
</script>

<style>
#modal {
    margin-top: 5rem;
}

/* modal */
.backdrop {
    /* display: none; */
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    cursor: pointer;
}

.modalBody {
    /* display: none; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 99999;
    background-color: #FEC855;
    border-radius: 10px;
  
}

/* form */
.formContainer {
    padding: 1rem 3rem;
}

.orderForm {
    max-width: 450px;
    padding: 30px;
    margin: 20px auto;
    border-radius: 3px;
    background: white;
}
.orderForm h1 {
    margin-bottom: 1rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.orderForm ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.orderForm ul li {
    display: block;
    margin-bottom: 10px;
    min-height: 35px;
    height: 100%;
    line-height: inherit;
}

.orderForm ul li .fieldStyle {
    box-sizing: border-box;
    padding: 8px;
    outline: none;
    border: 1px solid #dddfe2;
    box-shadow: 0 0 5px #333;
}

.orderForm ul li .fieldStyle:focus {
    box-shadow: 0 0 5px #b0cfe0;
    border: 1px solid #b0cfe0;
}

.orderForm ul li .fieldSplit {
    width: 100%;
    margin-bottom: .7rem;
    padding: .8rem 1rem;
}

.orderForm ul li .fieldFull {
    width: 100%;
}



.orderForm ul li textarea {
    width: 100%;
    height: 100px;
    font-family: inherit;
}

.orderForm ul li input[type="button"],
.orderForm ul li input[type="submit"] {
    background-color: #0A4EC2;
    color: #fff;
    border-color: #0A4EC2;
    border: 1px solid transparent;
    display: block;
    margin: 30px auto 0;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    cursor: pointer;
    border-radius: 35px;
}
</style>