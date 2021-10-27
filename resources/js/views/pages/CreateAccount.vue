<template>
<div class="container" style="position: relative;top: 10%;">
    <center>
        <v-card max-width="500">
            <v-container style="position: relative;top: 5%;" class="text-xs-center">
                <v-form>
                    <center>
                        <h1 style="color:#F28DBC" class="mt-10 mb-5">Sign Up</h1>
                        <v-text-field outlined name="FirstName" v-model="firstname" label="First Name" :rules="[() => !!firstname || 'This field is required']" :error-messages="errorMessages" required></v-text-field>
                        <v-text-field outlined name="LastName" v-model="lastname" label="Last Name" :rules="[() => !!lastname || 'This field is required']" :error-messages="errorMessages" required></v-text-field>
                        <v-select v-model="role" label="Roles" :items="roles" item-value="role_id" item-text="name" outlined dense></v-select>
                        <v-text-field outlined name="Email" v-model="email" label="Email" :rules="[() => !!email || 'This field is required']" :error-messages="errorMessages" required></v-text-field>
                        <v-text-field id="password" name="Password" outlined v-model="password" :rules="[() => !!password || 'This field is required']" :error-messages="errorMessages" label="Password" type="password" required></v-text-field>
                        <v-text-field id="password" v-on:blur="CheckPassword" v-model="repassword" :rules="[() => !!repassword || 'This field is required']" :error-messages="errorMessages" name="RePassword" outlined label="Re-enter Password" type="password"></v-text-field>
                        <v-card-actions>
                            <v-btn class="mb-10" primary @click="Register()" large block color="#F28DBC" style="color:white">Create Account</v-btn>
                        </v-card-actions>
                    </center>
                </v-form>
            </v-container>
        </v-card>

    </center>
</div>
</template>

<script>
export default {
    data() {
        return {
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            password: null,
            repassword: null,
            errorMessages: '',
            role: '',
            roles:[],
        }

    },
    created(){
        this.get_roles()
    },
    methods: {
        get_roles() {
            axios.get('api/GetRoles')
                .then(res => {
                    this.roles = res.data
                    console.log(res.data);
                })
        },
        Register() {
            axios.post('api/Register', {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                role: this.role
            }).then(res => {
                window.location.href = 'login'
            }).catch((error) => {
                console.log(error);
            })
        },
        CheckPassword: function (event) {
            if (this.repassword != this.password) {
                alert('Invalid credentials!');
                return
            }

        }
    },

}
</script>
