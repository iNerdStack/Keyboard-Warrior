<template>
  <div>
    <div class="flex flex-col md:flex-row  bg-white h-full">
      <!-- Mobile Header -->
      <div v-if="breakpoint.code == 'xs'" class="h-[60px] bg-white flex justify-end p-3 flex-row items-center">
       <div  v-for="item in sidebarItems">
     <nuxt-link v-if="item.button" :to="item.route" class=" px-3 p-3 bg-primary text-white ml-2 rounded-md">
         <span>{{item.name}}</span>
        </nuxt-link>

     <nuxt-link v-else :to="item.route" class="px-3">
         <span>{{item.name}}</span>
        </nuxt-link>
       </div>
      </div>
    <div v-else  class="flex-col w-1/12 md:p-10 p-2 flex items-center">
   <nuxt-link v-for="item in sidebarItems" :to="item.route" class="mt-5">
     <i class="!text-[30px] material-icons text-primary">{{item.icon}}</i>
        </nuxt-link>
    </div>
    <div class="w-full md:w-11/12 h-full min-h-screen">
    <slot />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breakpoint = useBreakpoint();

type SidebarItems= Array<{
    name: string;
    icon: string;
    route: string;
    button?: boolean;
}>;

const sidebarItems: SidebarItems = [
  {
        name: "Home",
        icon: "home",
        route: "/",
   },
   {    name: "Analytics",
        icon: 'assessment',
        route: '/analytics',
        button: true
   }
];

</script>