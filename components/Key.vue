<template> 
    <button v-if="keyboardTheme && keyboardTheme.key" @click="triggerKeyPress" :class="`h-[45px] flex justify-center items-center`"
    :style="{  width: buttonWidth + '%', ...keyboardTheme.key.style, backgroundColor: selectedColor}"
    >
   <span class="uppercase" :style="`color: ${selectedTextColor}`">{{label}} </span> 
    </button>
</template>

<script setup lang="ts">

const keyboardTheme = useKeyboardCurrentTheme();
const selectedColor = ref(keyboardTheme.value.key.style.backgroundColor);
const selectedTextColor = ref(keyboardTheme.value.key.style.color);

const props = defineProps({
    letter: {
        type: String,
        required: true,
        default: ""
    },
    label: {
        type: String,
        required: true,
        default: ""
    },
    keyPressed: {
        type: String,
        required: true,
        default: ""
    },
    keyRate: {
        type: Number,
        required: true,
        default: 0
    },
    ratio: {
        type: Number,
        default: 1
    }
});

const buttonWidth = computed<number>(
 () => keyboardTheme.value.key.width * props.ratio
)

watch(() => props.keyRate, () => {
    checkKeyPressed();
});


watch(keyboardTheme, () => {
selectedColor.value = keyboardTheme.value.key.style.backgroundColor;
selectedTextColor.value = keyboardTheme.value.key.style.color;
});


function checkKeyPressed() { 

    if (props.keyPressed == props.letter) {
     selectedColor.value = keyboardTheme.value.key.activeColor;
     selectedTextColor.value = keyboardTheme.value.key.activeTextColor;
        
     setTimeout(() => {
         selectedColor.value = keyboardTheme.value.key.style.backgroundColor;
         selectedTextColor.value = keyboardTheme.value.key.style.color;
     }, 300);
    }
}

function triggerKeyPress() {
  window.dispatchEvent(new KeyboardEvent('keydown', { 'key': props.letter }));
}


</script>