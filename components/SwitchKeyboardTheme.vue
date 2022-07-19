<template>
 <Dropdown name="Switch Keyboard Theme" :option-items="keyboardThemes" v-model="selectedThemeIndex" />
</template>

<script setup lang="ts">
const keyboardThemes = useKeyboardThemes();
const selectedThemeIndex = ref(-1); //not defined at start
const currentKeyboardTheme = ref(useKeyboardCurrentTheme());
const currentThemeIndex = useCurrentThemeIndex();

watch(selectedThemeIndex, () => {
    updateKeyboardTheme();
});

function updateKeyboardTheme() { 
    currentThemeIndex.value = selectedThemeIndex.value;
    currentKeyboardTheme.value = keyboardThemes[currentThemeIndex.value];
}

</script>
<style lang="">
    
</style>