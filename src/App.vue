//----------------------------------------------------------------------------------------------------
// App.vue
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
<script>
// Import Feather Icons for icon management throughout the app
import feather from 'feather-icons';

// Import shared header component
import AppHeader from './components/shared/AppHeader';

// Import shared footer component
import AppFooter from './components/shared/AppFooter';

export default {
  // Register components to be used in this component
  components: {
    AppHeader,
    AppFooter,
  },
  // Component data - reactive properties
  data: () => {
    return {
      appTheme: localStorage.getItem('theme'),
    };
  },
  // Lifecycle hook: called after component is mounted to DOM
  mounted() {
    feather.replace();  // Initialize icons
  },
  // Lifecycle hook: called after component updates
  updated() {
    feather.replace();  // Re-initialize icons after updates
  },
};
</script>

<template>
  <div :class="appTheme" class="pt-0.5">
    <!-- App header -->
    <AppHeader/>

    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <router-view :theme="appTheme"/>
    </transition>

    <!-- Scroll to top -->
    <back-to-top
        visibleoffset="500"
        right="30px"
        bottom="20px"
        class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <AppFooter/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vue-back-to-top {
  @apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
  duration-500
  ease-in-out
  transform
  hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
