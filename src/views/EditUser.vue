<template>
       <nav class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold">Code Crafters Users</h1>
                </div>

                <div class="flex items-center space-x-4">
                    <router-link to="/" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                    <router-link to="/users" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Users</router-link>
                </div>
            </div>
        </div>
    </nav>

    <div class="max-w-md mx-auto mt-4 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4 text-center ">Edit user</h2>
      <form @submit.prevent="updateUser">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium ">Name</label>
          <input v-model="user.name" type="text" class="mt-1 p-2 w-full border rounded-md" placeholder="enter your name">
        </div>
    
        <div class="mb-4">
          <label class="block text-gray-700 font-medium ">Email</label>
          <input v-model="user.email" type="email" class="mt-1 p-2 w-full border rounded-md" placeholder="enter your email">
        </div>
    
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
          <span v-if="loading">
            <svg class="animate-spin text-center h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
             Loading...
          </span>
    
          <span v-else>
            update user
          </span>
          
        </button>
      </form>
    
      <div class="mt-4 p-2 text-center">
        <p :class="{'text-green-500': success, 'text-red-500':!success}" >{{ message }}</p>
      </div>
    
    </div>

</template>

<script>
import axios from 'axios';

export default{
  data(){
        return{
            user: {
                name:'',
                email:'',
            },  
            loading: false          
        }
   },
   methods:{
    async fetchUser(){
        try {
            
            const response = await axios.get(`https://codecrafter-back-tcc5.onrender.com/api/users/${this.$route.params.id}`);
            this.user = response.data;
        } catch (error) {
            console.log('error fetching users');
        }
    },

    async updateUser(){
        this.loading = true;
        try {            
            await axios.put(`https://codecrafter-back-tcc5.onrender.com/api/users/${this.$route.params.id}`, this.user);            
            this.$toast.success('User Updated successfully!!!');
            this.$router.push('/users');
        } catch (error) {
            console.log('error fetching users');
        }finally{
            this.loading = false;
        }
    }

   },
   created(){
    this.fetchUser();
   }
}
    
</script>