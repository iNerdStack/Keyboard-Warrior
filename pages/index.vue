<template>
  <div class="bg-background pb-5 h-full min-h-screen flex">
    <div class="p-5 md:p-10 flex flex-col text-center md:text-left">
      <h1 class="text-black text-3xl font-semibold">Choose your level</h1>

      <div class="flex flex-col md:flex-row mt-10 bg-green p-2">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
          <div
            v-for="item in levels"
            class="bg-white p-4 rounded-lg flex flex-col justify-between"
          >
            <div class="flex flex-row justify-between">
              <span class="font-semibold">
                {{ item.name }}
              </span>
              <div>
                <Icon
                  name="mdi:star"
                  class="md:!text-[15px] !text-[10px] text-[#ffc300]"
                />
              </div>
            </div>
            <div class="mt-4 text-sm text-gray-500">
              {{ item.description }}
            </div>

            <div class="flex justify-end mt-3">
              <NuxtLink
                :to="item.route"
                :class="`${item.buttonColor} ${item.buttonHoverColor} text-white font-bold py-2 px-4 rounded`"
              >
                Start Game
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ILevel {
  name: string;
  description: string;
  buttonColor: string;
  buttonHoverColor: string;
  route: string;
}
[];

const levels: ILevel[] = [
  {
    name: 'Beginner',
    description: 'Type 15 random words in lowercase with no special characters',
    buttonColor: 'bg-green-400',
    buttonHoverColor: 'hover:bg-green-600',
    route: '/exercise?level=beginner',
  },
  {
    name: 'Amateur',
    description:
      'Type sentences in both uppercase and lowercase with characters',
    buttonColor: 'bg-purple-400',
    buttonHoverColor: 'hover:bg-purple-600',
    route: '/exercise?level=amateur',
  },
  {
    name: 'Professional',
    description:
      'Type longer sentences in both uppercase and lowercase with characters',
    buttonColor: 'bg-blue-400',
    buttonHoverColor: 'hover:bg-blue-600',
    route: '/exercise?level=professional',
  },
  {
    name: 'Expert',
    description:
      'Type long paragraph in both uppercase and lowercase with characters',
    buttonColor: 'bg-orange-400',
    buttonHoverColor: 'hover:bg-orange-600',
    route: '/exercise?level=expert',
  },
  {
    name: 'Die Hard',
    description:
      'Type crypto texts and characters in uppercase and lowercase with special characters & symbols',
    buttonColor: 'bg-red-400',
    buttonHoverColor: 'hover:bg-red-600',
    route: '/exercise?level=dieHard',
  },
];
</script>
