<template>
  <div>
    <div class="flex flex-row bg-white h-full">
    <div class="flex-col w-1/12 md:p-10 p-2 hidden md:flex items-center">
   <nuxt-link v-for="item in sidebarItems" :to="item.route" class="mt-5">
     <i class="!text-[30px] material-icons text-secondary">{{item.icon}}</i>
        </nuxt-link>
    </div>
    <div class="w-full md:w-11/12 h-full min-h-screen">
    <slot />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">



type SidebarItemsProps = Array<{
    icon: string;
    route: string;
}>;

const sidebarItems: SidebarItemsProps = [
   {
        icon: "home",
        route: "/"
   },
   {
        icon: 'assessment',
        route: '/analytics'
   }
];

</script>