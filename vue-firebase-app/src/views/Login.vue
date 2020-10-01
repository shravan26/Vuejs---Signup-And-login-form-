<template>
    <div>
        Login
        <div class="errors">
            {{ errors.message }}
        </div>
        <div class="email">
            <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="password">
            <input type="password" v-model="password" placeholder="Password" />
        </div>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    data() {
        return {
            email: "",
            password: "",
            errors: "",
        };
    },
    methods: {
        async login() {
            try {
                const user = await firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password);
                console.log(user);
                this.$router.replace({ name: "About" });
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.error {
    color: red;
    font-size: 18px;
}
input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}
button {
    width: 400px;
    height: 75px;
    font-size: 100%;
}
</style>
