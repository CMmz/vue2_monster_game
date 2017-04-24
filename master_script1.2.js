new Vue ({
    el: '#app',

    data:
        {
            playerHealth: 100,
            opponentHealth: 100,
            turns: []
        },

    methods:
        {
        damage_calculator: function (min_damage, max_damage)
        {
          return Math.max(Math.floor((Math.random() * max_damage) + 1), min_damage);
        },


        attack_button: function ()
        {
            // deal damage, take damage, output info to array
            console.log(this.damage_calculator(3, 10));
        }
        }

});