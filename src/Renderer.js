import user_template from './templates/user-template.hbs'
import user_friends_template from './templates/user-friends-template.hbs'
import quote_template from './templates/quote-template.hbs'
import pokemon_template from './templates/pokemon-template.hbs'
import meat_template from './templates/meat-template.hbs'

export default class Renderer {
    renderUsers(users) {
        let newHTML = user_template(users.results[0]);
        $(".user-container").empty().append(newHTML);
    }

    renderFriends(users) {
        let friendsHTML = user_friends_template({friends: users.results.splice(1)})
        $(".friends-container").empty().append(friendsHTML)
    }

    renderQuote(quoteInfo) {
        let quoteHTML = quote_template(quoteInfo)
        $(".quote-container").empty().append(quoteHTML)
    }

    renderPokemon(pokemonInfo) {
        let pokemonHTML = pokemon_template(pokemonInfo)
        $(".pokemon-container").empty().append(pokemonHTML)
    }

    renderMeat(meatText) {
        let meatHTML = meat_template({text: meatText})
        $(".meat-container").empty().append(meatHTML)
    }

    render(data){
        this.renderFriends(data.users)
        this.renderUsers(data.users)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}
