<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/"
        >
          Modern CV
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
<!--        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href=""
            >
              <i
                class="lg:text-slate-200 text-slate-400 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Документация
            </a>
          </li>
        </ul>-->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <IndexDropdown name="Страницы" color="#fff">
              <H>Admin Layout</H>
              <Item to="/index">Index</Item>
              <Item to="/admin/dashboard">Dashboard</Item>
              <Item to="/admin/settings">Settings</Item>
              <Item to="/admin/tables">Tables</Item>
              <Item to="/admin/maps">Maps</Item>
              <H>Auth Layout</H>
              <Item to="/auth/login">Login</Item>
              <Item to="/auth/register">Register</Item>
              <H>No Layout</H>
              <Item to="/landing">Landing</Item>
              <Item to="/profile">Profile</Item>
              <H>CV</H>
              <Item to="/cv1">cv1</Item>
              
            </IndexDropdown>
          </li>
          <li class="flex items-center">
            <RouterLink to="/auth/login">
            <button
                class="bg-sky-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
            >
              <i class="fas fa-lock-open"></i> Войти
            </button>
            </RouterLink>
          </li>

          <NavItem to="Share_url" class="fa-facebook">facebook</NavItem>
          <NavItem to="Share_url" class="fa-twitter">twitter</NavItem>
          <NavItem to="Share_url" class="fa-github">github</NavItem>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import H from "@/components/Dropdowns/IndexDropdownHeader.vue";
import Item from "@/components/Dropdowns/IndexDropdownItem.vue";
import NavItem from "@/components/Navbars/AuthNavbarItem.vue";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
    Item,
    NavItem,
    H,
},
};
</script>
