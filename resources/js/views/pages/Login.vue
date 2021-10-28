<template>
<v-container style="position: relative;top: 10%;">
    <v-row class="mt-10" align="center" justify="center">
        <v-col>
            <v-card height="600px">
                <v-container style="position: relative;top: 5%;" class="text-xs-center">
                    <v-form>
                        <v-img src="upload/flower_vine.png"></v-img>
                        <h1 class="mb-10" style="color:teal">Welcome Back</h1>
                        <v-text-field name="Email" v-model="email" label="Email" append-icon="mdi-email"></v-text-field>
                        <v-text-field id="password" name="Password" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                        <!-- <v-text-field id="password" name="Password" outlined v-model="password" label="Password" type="password" prepend-icon="mdi-lock"></v-text-field> -->
                        <v-btn class="d-flex justify-center mt-3" primary large block color="teal" @click="Login()" style="color:white">Log in</v-btn>
                    </v-form>
                    <v-btn class="d-flex justify-center mt-3" outlined color="teal" :to="{ name: 'forgot_password'}">Forgot Password?</v-btn>
                </v-container>
            </v-card>
        </v-col>
        <v-col>
            <v-card height="600px" color="teal">
                <v-container style="position: relative;top: 30%;" class="text-xs-center">
                    <center>
                        <h1 style="color:white">New User?</h1>
                        <v-btn class="mt-10" outlined color="white" :to="{ name: 'create_account'}">Create Account</v-btn>
                    </center>

                </v-container>
            </v-card>
        </v-col>

    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            show1: false,
            show2: true,
        }

    },

    methods: {
        Login() {
            axios.post('api/login', {
                email: this.email,
                pword: this.password
            }).then(res => {
                if (!res.data) {
                    alert('Invalid credentials!');
                    return
                };
                localStorage.setItem('user', JSON.stringify(res.data));
                this.$router.push({
                    name: 'home'
                });
            }).catch((error) => {
                console.log(error);
            })
        },
    },

}
</script>

<style scoped>
p {
    font-family: Trebuchet MS
}
</style>
