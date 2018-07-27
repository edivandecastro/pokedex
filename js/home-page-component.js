Vue.component('home-page', {
  template: `
    <div>
      <input type="text" id="pokeFilter" v-model:nameFilter="$parent.nameFilter" placeholder="Search" maxlength="20">
      <ul class="poke-list">
        <list-pokemon v-for="item in $parent.pokeList" :pokemon="item" :key="item.number" ></list-pokemon>
      </ul>
    </div>
  `
})