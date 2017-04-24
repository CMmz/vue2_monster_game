
// first I'll open a new view and stance. Then I'll set my initial properties. The ones I remember include the player health, monster health, state of the game, and an array to keep track of each round of actions

new Vue (
    {
    el: '#master_script.js',

    /////// Initial Data //////////

    data:
        {
            game_state: off,
            player_health: 100,
            monster_health: 100,
            turn_display: []
        },

        ////////// Stock Subroutines //////////

    methods:
    {
    // The methods come next. There's going to be a damage calculator, a healing calculator, a win checker, a loss checker, a reset game. Then each button gets its own method as well.

        start_game: function () {
            this.game_state = on;
            this.player_health = 100;
            this.monster_health = 100;
            this.turn_data = [];

        },

        damage_calculator: function (min_damage, max_damage)
        {
            // return a single number that is in between the min and max damage, say 3 and 10.
           return (math.max(math.floor(math.random() * max_damage) + 1), min_damage);
        },

        turn_message: function (message) {
            this.turn_display.unshift(message);
        },

        check_player_health: function ()
        {
            if (this.player_health <=0) {
                return "Player is Dead.";
            };
        },

        check_monster_health: function ()
        {
            if (this.monster_health <=0) {
                return "Monster is Dead.";
            };
        },

        player_attack: function() {
            return this.monster_health -= this.damage_calculator(3, 10);
        },

        monster_attack: function () {
            return this.player_health -= this.damage_calculator(5, 12);
        },

        special_attack: function () {
            return this.monster_health -= this.damage_calculator( -2, 15);
        },

        healing_potion: function () {
           return this.player_health += math.floor((math.random() * 10) + 1);
        },

        quit_game: function() {
            return this.game_state = off;
        },


/////////// Game Logic ////////////////





// I have some plugs to work into the index file as well. The plugs I remember include toggling the start game area, toggling the action button controls, and toggling the turn information





}
}
);