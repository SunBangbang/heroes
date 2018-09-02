<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Gender</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gender" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="addHero">Submit</button>
        </form>
    </div>
</template>

<script>

// import axios from 'axios';

export default {

    data(){

        return {

            formData:{

                name:'',

                gender:''

            }

        }

    },

    methods:{

        addHero(){

            this.$http.post('heroes',this.formData)

            .then((response)=>{

                if(response.status == 201){

                    alert('添加英雄成功');

                    this.$router.push('/heroes');

                }
            })
            .catch((err) => {

                console.log(err);

            })

        }

    }

}
</script>

<style>

</style>
