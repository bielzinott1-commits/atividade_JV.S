const andarRobo = (distanciaParede) => {
    let passos = 0;

    while (true) {
        passos++;

        if (passos === distanciaParede) {
            console.log("Bateu e parou!");
            break;
        }
    }
};

andarRobo(5);