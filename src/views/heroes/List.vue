<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link to="heroes/add" class="btn btn-success">add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in list" :key="item.id">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.gender}}</td>
                        <td>
                        <!-- <a href="edit.html">edit</a> -->
                        <router-link :to="'/heroes/edit/'+ item.id">edit</router-link>
                        &nbsp;&nbsp;
                        <a href="javascript:;" @click.prevent="deleteHero(item.id)">delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td v-if="list.length == 0" colspan="4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    data(){

        return{
            //英雄列表
            list:[]

        }

    },
    mounted(){

        this.loadData()

    },
    methods:{

        loadData(){

            this.$http.get('heroes')

            .then((result) => {

                if(result.status==200){

                    this.list = result.data;
                }
                
            }).catch((err) => {

                console.log(err);
                
            });
        },

        deleteHero(id){

            if(confirm('您确定要删除吗')){

                this.$http.delete(`heroes/${id}`)
    
                .then((result) => {
    
                    if(result.status==200){
    
                        alert('删除成功');
    
                        this.loadData()
    
                    }else{
    
                        alert('删除失败');
    
                    }
                    
                })

            }

        }

    }

};
</script>

<style>

</style>

