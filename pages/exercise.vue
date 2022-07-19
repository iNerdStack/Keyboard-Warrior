<template>
       <div class="bg-background h-full flex md:justify-center">
        <div class="flex flex-col w-full md:max-w-[1000px]" v-if="words">
          <div class="p-10 flex flex-col h-full">
            <div class="flex flex-row my-3 justify-center md:justify-between">
                  <SwitchKeyboardTheme/>
                  <div class="hidden md:flex">
                    <button @click="restart" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary">
                        Restart
                    </button>
                  </div>
            </div>

           <div class="bg-white md:px-8 px-4 flex flex-col block rounded-lg border border-gray-200 shadow-md">
      <div :class="`flex flex-row text-black text-center md:text-left h-[30px] justify-center mt-5 scale-100 ${isGameOn ? 'scale-75 py-2' : 'scale-100 py-8'} ease-in duration-500`">
 <div class="flex flex-row items-center ">
            <div>
             <i class="md:!text-[45px] !text-[30px]  material-icons text-secondary mt-1">keyboard</i>
            </div>
           
         <span class="text-[15px] md:text-lg pl-1 md:pl-2"> {{CPM}} CPM </span>
     
         </div>

          <div class="flex flex-row items-center  ml-1 md:pl-3">
            <div>
             <i class="md:!text-[45px] !text-[30px]  material-icons text-secondary mt-1">timelapse</i>
            </div>
           
         <span class="text-[15px] md:text-lg pl-1 md:pl-2 font-bold"> {{time}}  </span>
     
         </div>

           <div class="flex flex-row items-center ml-1 md:pl-3">
            <div>
             <i class="md:!text-[45px] !text-[30px]  material-icons text-secondary mt-1">track_changes</i>
            </div>
           
         <span class="text-[15px] md:text-lg pl-1 md:pl-2"> {{wordAccuracy}} % Accuracy </span>
     
         </div>
      </div>

      <div> 
    <div class="mt-5 flex text-center py-5 px-3 mb-3 bg-black rounded-md">
        
    <span  class="mx-1 text-white text-sm md:text-lg">  
         <div v-html="computedWordResult" /> </span>
           </div> 
      </div>
           </div>
            <div class="block rounded-lg border border-gray-200 shadow-md mt-10">
            <Keyboard v-model="keyPressed" v-model:keyRate="keyRate" @restart="restart" :capitalize="capitalize"/>
          </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  GameLevels } from '@/types';

definePageMeta({
  middleware: "exercise"
})

const route = useRoute();
const level: GameLevels = route.query.level as GameLevels;
const words = ref<string>('');
const timer = ref<any>(undefined);
const elapsedTime = ref<number>(0);
const CPM = ref<number>(0);
const keyRate = ref<number>(0);
const capitalize = ref(false);
const wordIndex = ref<number>(0); 
const inputRecordArray = ref <Array<boolean>>([]);
const keyPressed = ref<string>('');
const isGameOn = ref(true);

    
watch(keyRate, () => {
    
    if (keyPressed.value == words.value[wordIndex.value]) {
        inputRecordArray.value.push(true);
    }
    else { 
        inputRecordArray.value.push(false);
    }
    wordIndex.value++;

     
     if ((wordIndex.value == words.value.length)) { 
         endGame();
         return;
    }
});

const computedWordResult = computed<string>(() => { 
    let wordResult = ``;
    let word = words.value.split('');

    word.forEach((element, index) => {
        if (index == wordIndex.value) {
            wordResult += `<span style="color: white;" class="bg-primary">${words.value[index]}</span>`;
        }
        else { 
            if (inputRecordArray.value[index] !== undefined) {
                if (inputRecordArray.value[index]) {
                    wordResult += `<span style="color: #40F55D">${words.value[index]}</span>`;
                }
                else {
                    wordResult += `<span style="color: #FE4D4D">${words.value[index]}</span>`;
                }
            }
            else { 
                    wordResult += `<span style="color: white">${words.value[index]}</span>`;   
            } 
     }
    });

    return wordResult;
});

const wordAccuracy = computed<number>(() => { 
    let numberOfCorrectWords = 0;

    inputRecordArray.value.forEach((element) => {
        if (element) {
            numberOfCorrectWords++;
        }
    });

    return inputRecordArray.value.length == 0 ? 100 :  Math.floor((numberOfCorrectWords / inputRecordArray.value.length) * 100);
})

const time = computed<string>(() => {
    return useTimerFormat(elapsedTime.value);
})

onMounted(() => { 
    startGame();
})

function getWordPerMinute(){ 
   //Calculate CPM by number of accurate letters/minute
    let numberOfCorrectWords = 0; 

    inputRecordArray.value.forEach((element) => {
        if (element) {
            numberOfCorrectWords++;
        }
    });
    if (numberOfCorrectWords) { 
      CPM.value = Math.floor(numberOfCorrectWords / (elapsedTime.value) * 60);
    }
    
}

function startTimer() {
    timer.value = setInterval(() => {
        getWordPerMinute();
         elapsedTime.value += 1;
      }, 1000);
}

function stopTimer() { 
  clearInterval(timer.value);
}

function startGame() { 
    //For Analytics
    useOnStartGame();
  
    const levelData = useLevels(level);
    words.value = levelData.words;
    capitalize.value = levelData.capitalize;

     startTimer();
}


function endGame() {
    stopTimer();
    isGameOn.value = false;

    //For Analytics
    useOnEndGame({
        level,
        accuracy: wordAccuracy.value,
        CPM: CPM.value,
        time: elapsedTime.value
    });
}

function restart() { 
    clearInterval(timer.value);
    CPM.value = 0;
    elapsedTime.value = 0;
    wordIndex.value = 0;
    inputRecordArray.value = [];
    startGame();
    isGameOn.value = true;
}
</script>