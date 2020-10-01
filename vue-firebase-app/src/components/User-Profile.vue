<template>
    <div>
        <ul>
            <li :key="profile" v-for="profile in profiles">{{ profile }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["profile"],
    methods: {
        addUser(userDetails) {
            this.profiles.push(userDetails);
        },
    },
};
</script>

<style lang="scss" scoped></style>
