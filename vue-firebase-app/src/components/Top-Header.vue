<template>
    <div>
        Logged In
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button @click = "signOut">Sign Out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
    export default {
        created(){
                firebase.auth().onAuthStateChanged(user => {
                    if(user) {
                        this.loggedIn = true;
                    }
                    else{
                        this.loggedIn = false;
                    }
                })
            },
        data () {
            return {
                loggedIn : false
            }
        },
        methods: {
            async signOut () {
                try {
                    const data = await firebase.auth().signOut();
                    console.log(data);
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>