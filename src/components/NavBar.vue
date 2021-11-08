<template>
  <Popover class="bg-white border-b-2 border-gray-100 fixed inset-x-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start space-x-5 items-center lg:w-0 lg:flex-1">
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none']">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -ml-4 mt-3 px-2 w-screen max-w-xs sm:px-0 lg:ml-0">
                <div class=" overflow-hidden">
                  <div class="grid gap-5 bg-gray-100 sm:gap-8 py-8">
                    <a v-for="item in menu" :key="item.name" :href="item.href" class="-m-3 py-3 flex items-start px-8 hover:bg-white">
                      <div class="ml-4 flex justify-between w-full">
                        <p class="text-sm font-normal text-gray-700">
                          {{ item.name }}
                        </p>
                        <svg v-if="item.submenu && item.submenu.length>0" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </a>
        </div>

        <div class=" relative rounded-full">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="currency" class="sr-only">Currency</label>
            <select id="currency" name="currency" class=" cursor-pointer h-full py-0 px-4 rounded-tl-full rounded-bl-full border border-gray-300 appearance-none outline-none bg-white text-gray-500 sm:text-sm">
              <option>Movies</option>
              <option>Celebrities</option>
              <option>Genre</option>
              <option>Trailers</option>
            </select>
          </div>
          <input type="text" placeholder="Search here..." class=" text-sm text-gray-500 appearance-none outline-none border border-gray-300 rounded-full pl-28 py-2 "/>
          <div class="absolute inset-y-0 right-0 px-2 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </div>
        </div>
        
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#" class= "flex space-x-3 items-center text-gray-500 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div class="whitespace-nowrap text-sm font-medium text-gray-500 group-hover:text-gray-900">Welcome Guest!  <span class=" cursor-pointer text-black font-semibold">Login</span></div>
          </a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in menu" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  UsersIcon,
  SearchCircleIcon
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const menu = [
  {
    name: 'Home',
    href: '#',
    submenu : [
      {
        name :'Latest Movies',
        href : '#'
      }
    ]
  },
  {
    name: 'Movies',
    href: '#',
  },
  { 
    name: 'Genre', 
    href: '#', 
  },
  {
    name: 'Integrations',
    href: '#',
  },
  {
    name: 'Celebrities',
    href: '#',
  },
  {
    name: 'Page',
    href: '#',
  },
  {
    name: 'Blog List',
    href: '#',
  },
  {
    name: 'Post Formats',
    href: '#',
  },
  {
    name: 'Joomla!',
    href: '#',
  },
  {
    name: 'Romantic',
    href: '#',
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      menu,
    }
  },
}
</script>