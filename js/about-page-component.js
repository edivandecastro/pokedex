Vue.component('about-page', {
  template: `
    <div>
      <router-link to="/" class="back-button"> &lt; </router-link>

      <div class="poke-profile" >
        <div>#{{ $route.params.number }} - {{ pokemon.name }}</div>
        <img class="poke-sprite" :src="'http://serebii.net/sunmoon/pokemon/'+$route.params.number+'.png'" />
      </div>

      <ul class="poke-types">
        <li v-for="type in pokemon.types" >
          <img :src="'http://serebii.net/pokedex-bw/type/'+type.name+'.gif'" />
        </li>
      </ul>

      <table class="stats">
        <tr>
          <td>Attack</td>
          <td>Defense</td>
          <td>Speed Attack</td>
          <td>Speed Defense</td>
          <td>Speed</td>
        </tr>
        <tr>
          <td>{{ pokemon.attack }}</td>
          <td>{{ pokemon.defense }}</td>
          <td>{{ pokemon.sp_atk }}</td>
          <td>{{ pokemon.sp_def }}</td>
          <td>{{ pokemon.speed }}</td>
        </tr>
      </table>
    </div>
  `,
  data: () => {
    return {
      pokemon: { types: [] }
    }
  },
  mounted: function() {
    return PokeService.API.Pokemon.find(this.$route.params.number)
      .then(pokemon => { this.pokemon = pokemon });
  }
})