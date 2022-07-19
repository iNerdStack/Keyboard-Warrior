<template>
<div class="items-center" v-if="breakpoint.code == 'xs'">
  <div class="m-4 flex flex-row">
  <input class="h-[50px] w-full p-3" placeholder="Type Here" v-model="wordInput"/> 
  <button class="p-3 bg-white ml-2 rounded-md" @click="reset">
    Restart
  </button>
  </div>
</div>
<div class="flex flex-col" v-else :style="keyboardTheme.keyboard.style">

 <template v-for="keyRow in numberOfKeyRows" >
   <div class="flex flex-row justify-between" :style="keyboardTheme.keyboard.keySpacing">
   <template v-for="(item,index) in keyboardLayouts">
  <Key
     v-if="item.row == keyRow"
     :key-rate="keyRate"
     :letter="item.name"
     :ratio="item.ratio"
     :key-pressed="keyPressed"
     :label="item.label"
     :label-color="item.labelColor"
     />
   </template>
    </div>
    </template>
    </div>
</template>


<script setup lang="ts">
const numberOfKeyRows = 5;
const keyboardLayouts = useKeyboardLayout();
const breakpoint = useBreakpoint();
const keyRate = ref(0); //used to trigger function in case the same key was pressed twice
const wordInput = ref(''); //for mobile view
const keyboardTheme = useKeyboardCurrentTheme();

//For v-models
const emit = defineEmits(['update:modelValue', 'update:keyRate', 'restart'])

function updateValue(value: string) {
    emit('update:modelValue', value);
}

function updateKeyRate(value: number) {
    emit('update:keyRate', value);
}

const keyPressed = ref<string>('');

const props = defineProps({
  capitalize: {
    type: Boolean,
    default: false
  },
});



function keyDownHandler(e) {
  if ((props.capitalize && e.key != 'Shift' && e.key != 'CapsLock') || !props.capitalize ) {
    keyPressed.value = e.key;
    updateValue(e.key);
    keyRate.value++
    updateKeyRate(keyRate.value);
  }

};

function reset() {
  wordInput.value = '';
  emit('restart');
}


onMounted(() => { 
    window.addEventListener('keydown', keyDownHandler);
})

onUnmounted(() => { 
 window.addEventListener('keydown', keyDownHandler)
})


</script>