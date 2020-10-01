<template>
    <div>
        About Yourself
        <form @submit.prevent="submitProfile">
			<div class="email">
				<input type="email" v-model = "email" placeholder="Email" /> 
			</div>
			<div class="name">
				<input type="name" v-model = "name" placeholder="Name" /> 
			</div>
			<div class="mobile">	
				<input type="mobile" v-model = "mobile" placeholder="Mobile" /> 
			</div>
		</form>
		<button type="submit">Add details</button>
		<user-profile :profiles="profiles" @profile-submitted = "addUser"></user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/User-Profile'
export default {
	component: {
		'user-profile' : UserProfile,
	},
    data() {
        return {
			email : "",
			name : "",
			mobile : "",
			profiles : [],
        };
	},
	methods : {
		submitProfile () {
			let userDetails = {
				email : this.email,
				name : this.name,
				mobile : this.mobile
			}
			this.$emit('profile-submitted', userDetails);
			this.email = null;
			this.name = null;
			this.mobile = null;
		},
	}
};
</script>
<style lang="scss" scoped></style>
