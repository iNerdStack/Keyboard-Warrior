<template>
    <div class="bg-background pb-5 h-full flex justify-center">
      <div class="w-full md:max-w-[1200px] flex flex-col">
         <div class="m-6 md:m-10">
            <span class="text-2xl font-semibold">Score Analytics</span>
            <div class="flex flex-col md:flex-row mt-8">
   <div class="grid md:grid-cols-3 grid-cols-1 gap-4 w-full md:w-4/6">
           <div v-for="item in analytics.scores" class="bg-white hover:bg-primary hover:!text-white p-4 rounded-lg">
             <div class="flex flex-row justify-between">
                <span class="font-semibold">
               {{item.title}}
              </span>
                <div>
             <i class="!text-[15px] material-icons text-[#ffc300]">star</i>
            </div>

             </div>
              
              <div class="flex justify-center text-center my-12 flex-col ">
               <span class="text-4xl">{{item.count}} </span>    
               <span class="text-gray-500 hover:text-white  text-sm"> {{item.subtitle}}</span>
              </div>
             
             <div v-if="item.progressBar" class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-4">
               <div class="h-2.5 rounded-full" 
               :style="`width: ${item.count}; background-color: ${item.progressValue <= 50 ? '#dc2626' : item.progressValue > 80  ?  '#16a34a' : '#3b82f6'}`"></div>
               </div>
            </div>

          </div>  
          <div class="md:px-4 mt-4 md:mt-0 grid grid-cols-1 w-full md:w-2/6">
             <div class="bg-white hover:bg-primary hover:text-white p-5 rounded-lg">
                 <div class="flex flex-row justify-between">
          <span class="font-semibold">
               Best Time
              </span>
                <div>
             <i class="!text-[15px] material-icons text-[#ffc300]">star</i>
            </div>

             </div>
                <div class="mt-3 flex flex-row justify-between font-semibold" v-for="item in analytics.bestTime">
                  <span class="text-sm"> {{item.name}}</span>
                   <span> {{useTimerFormat(item.time)}}</span>
                </div>

                <div class="hidden md:flex mt-8 justify-center">
                    <img src="/time.png" alt="" srcset="" width="200"/>
                </div>
             </div>
            </div> 
          

            </div>

     <div class="mt-5 flex flex-col text-center md:text-left">
      <span class="my-6 text-gray-500 font-bold text-md md:text-lg">Record for your last 50 Games</span>
       <table class="table-fixed text-[12px] md:text-[16px]" width="100%">
  <thead>
    <tr class="text-gray-500">
      <th class="text-left ">Level</th>
      <th class="text-left"> Time </th>
      <th class="text-left">CPM</th>
        <th class="text-left">Accuracy</th>
        <th class="text-left hidden md:flex">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in completedGamesList">
      <td class="font-semibold capitalize">{{item.level}}</td>
      <td class="text-gray-500">{{useTimerFormat(item.time)}}</td>
      <td class="text-gray-500">{{item.CPM}}</td>
      <td class="text-gray-500"> {{item.accuracy}}%</td>
        <td class="text-gray-500 hidden md:flex"> {{item.date}}</td>
    </tr>
  </tbody>
 </table>
</div>      
</div>
      </div>
    </div>
</template>

<script setup lang="ts">
const analytics = useAnalytics();
const completedGamesList = ref(useCompletedGamesList());
</script>

<style>
table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 25px 10px;
}
</style>