<template>
      <nav class="bg-gray-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                <h1 class="text-2xl font-bold">Code Crafters Users</h1>
                </div>

                <div class="flex items-center space-x-4">
                    <router-link to="/" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                    <div v-if="isAuthenticated">
                        <router-link to="/users" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Users</router-link>
                
                    </div>
                    <div v-if="!isAuthenticated">
                    <router-link to="/login" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</router-link>
                    <router-link to="/register" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</router-link>
                </div>

                <div v-else>
                    <button @click="logout" class="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">logout</button>
                </div>
                
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default{
    computed:{
        //
        isAuthenticated(){
            return !!localStorage.getItem('token');
        }
    },

    methods:{
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>