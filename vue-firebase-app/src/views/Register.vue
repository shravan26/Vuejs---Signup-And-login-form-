<template>
    <div>
        <div v-if="error" class="error">{{ error.message }}</div>
        <form @submit.prevent="pressed">
            Register
            <div class="email">
                <input type="email" v-model="email" placeholder="email" />
            </div>
            <div class="password">
                <input
                    type="password"
                    v-model="password"
                    placeholder="password"
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    methods: {
        async pressed() {
            try {
                const user = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password);
                console.log(user);
                this.$router.replace({ name: "About" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
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
