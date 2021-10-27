<template>
<div class="container" style="position: relative;top: 10%;">
    <center>
        <v-card max-width="500">
            <v-container style="position: relative;top: 5%;" class="text-xs-center">
                <v-form>
                    <center>
                        <h1 style="color:#F28DBC" class="mt-10 mb-5">Password Reset</h1>
                        <v-text-field id="old_password" name="OldPass" outlined v-model="old_password" :rules="[() => !!old_password || 'This field is required']" :error-messages="errorMessages" label="Old Password" type="password" required v-on:blur="check_old_password"></v-text-field>
                        <div class="mt-n6" style="color:red;text-align:left" id="op">{{ old_alert }}</div>
                        <v-text-field id="new_password" name="NewPass" outlined v-model="new_password" :rules="[() => !!new_password || 'This field is required']" :error-messages="errorMessages" label="New Password" type="password" required></v-text-field>
                        <v-text-field id="re_password" v-on:blur="CheckPassword"  v-model="re_password" :rules="[() => !!re_password || 'This field is required']" :error-messages="errorMessages" name="re_password" outlined label="Re-enter Password" type="password"></v-text-field>
                        <div class="mt-n5" style="color:red;text-align:left" id="alert" v-if="alert">{{ alert }}</div>
                        <v-card-actions>
                            <v-btn class="mb-10" primary @click="SaveNewPassword()" large block color="#F28DBC" style="color:white">Save</v-btn>
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
            old_password: null,
            new_password: null,
            re_password: null,
            errorMessages: '',
            old_alert:'',
            alert: "",
            op: ''
        }

    },
    methods: {
       
        SaveNewPassword() {
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/SaveNewPassword', {
                id : this.user.id,
                new_password: this.new_password
            }).then(res => {
                window.location.href = 'login'
            }).catch((error) => {
                console.log(error);
            })
        },
        check_old_password(){
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/checkpassword',{
                id : this.user.id,
                old_password : this.old_password
            }).then(res=>{
                this.op = res.data
                if(this.op == 0){
                    this.old_alert = "Old Password not match";
                    this.old_password = '';
                }else{
                    this.old_alert = '';
                }
                
            })
        },
        CheckPassword: function (event) {
            if (this.re_password != this.new_password) {
                this.alert = "Passwords must match";
                this.new_password = '';
                this.re_password = '';
                return
            }else{
                this.alert = '';
            }

        }
    },

}
</script>
