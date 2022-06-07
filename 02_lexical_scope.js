function bankRobbery() {
    const heroes = ["Shaktimaan", "Krishna", "Ganesha", "Shiv"];

    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us,$(hero.toUpperCase)`);
            }
        }
        inner();
    }
    cryForHelp();
}
