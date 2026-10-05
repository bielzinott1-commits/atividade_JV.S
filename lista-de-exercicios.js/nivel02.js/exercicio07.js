const diminuirEnergia = (energiaInicial) => {
    let energia = energiaInicial;

    while (energia > 0) {
        console.log(energia);
        energia -= 10;
    }
};

diminuirEnergia(50);