const menu = ["espresso", "cappuccino", "latte", "americano"];

const recibirPedido = (producto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (menu.includes(producto.toLowerCase())) {
                resolve(`Pedido recibido: ${producto}`);
            } else {
                reject(`No tenemos ${producto} en el menú`);
            }
        }, 3000);
    });
};

const prepararCafe = (mensajePrevio) => {
    return new Promise((resolve, reject) => {
        const producto = mensajePrevio.split(": ")[1];

        setTimeout(() => {
            const numeroAleatorio = Math.random();
            const errorMaquina = numeroAleatorio <= 0.20;

            // console.log(`Valor de error de maquina: ${numeroAleatorio.toFixed(2)} (error: ${errorMaquina})`);

            if (errorMaquina) {
                reject("La máquina está rota, no se pudo preparar el café");
            } else {
                resolve(`☕ Café listo: ${producto}`);
            }
        }, 3000);
    });
};

const procesarPedido = async (producto) => {
    try {
        const confirmacion = await recibirPedido(producto);
        console.log(confirmacion);

        const cafeListo = await prepararCafe(confirmacion);
        console.log(`✅ Entregado: ${cafeListo}`);

    } catch (error) {
        console.error(`❌ Error: ${error}`);
    }
};

procesarPedido("latte");