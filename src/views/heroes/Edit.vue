<template>
     <div>
        <h2 class="sub-header">Edit Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Gender</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gender" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="editHero">Submit</button>
        </form>
    </div>
</template>

<script>

// import axios from 'axios';

export default {
    props:['id'],

    data(){

        return {

            formData:{

                name:'',

                gender:''
            }
        }
    },

    mounted(){

        this.loadData()

    },

    methods:{

        loadData(){

            this.$http.get(`heroes/${this.id}`)

            .then((response) => {

                if(response.status == 200){

                    this.formData = response.data;

                }

            })
            .catch((err) => {

                console.log(err);
                
            })
        },

        editHero(){

            this.$http.put(`heroes/${this.id}`,this.formData)

            .then((response) => {

                if(response.status == 200){

                    alert('修改成功');

                    this.$router.push('/heroes');
                }

            })
            .catch((err)=>{

                console.log(err);
                
            })
        }
    }
}
</script>

<style>

</style>
