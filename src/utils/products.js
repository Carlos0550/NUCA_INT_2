export const productos = [
    {
        id: 1,
        title: "Camiseta de Entrenamiento",
        price: Math.floor(Math.random() * (15000 - 5000 + 1)) + 1000,
        idCategoria: 1,
        imageUrl: "../assets/imagenes/remeraZeusGym.webp",
        descripcion: "Confort y estilo para tus entrenamientos. Esta camiseta está diseñada para brindarte la máxima comodidad y transpirabilidad mientras superas tus límites. ¡Luce increíble mientras entrenas al máximo!"
    },
    {
        id: 2,
        title: "Pantalón Deportivo de Alta Compresión",
        price: Math.floor(Math.random() * (15000 - 5000 + 1)) + 1000,
        idCategoria: 1,
        imageUrl: ".././assets/imagenes/pantCompresion.png",
        descripcion: "El pantalón perfecto para un ajuste ceñido y cómodo durante tus entrenamientos más intensos. Su tecnología de compresión mejora la circulación y reduce la fatiga muscular. ¡Siente el poder de cada movimiento!"
    },
    {
        id: 3,
        title: "Proteína Whey 100%",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 2,
        imageUrl: ".././assets/imagenes/proteina.png",
        descripcion: "La proteína ideal para desarrollar músculo y recuperarte después de tus entrenamientos. Con 25 gramos de proteína por porción, esta Whey es todo lo que tu cuerpo necesita para alcanzar su máximo potencial. ¡Recupérate más rápido y más fuerte!"
    },
    {
        id: 4,
        title: "Creatina Monohidratada",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 2,
        imageUrl: ".././assets/imagenes/creatina.jpeg",
        descripcion: "La creatina es esencial para aumentar la fuerza y el rendimiento físico. Aumenta tu resistencia, mejora la explosividad y ayuda en la recuperación. ¡Prepárate para llevar tu entrenamiento al siguiente nivel!"
    },
    {
        id: 5,
        title: "BCAA's Aminoácidos Ramificados",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 2,
        imageUrl: ".././assets/imagenes/bcaa.jpeg",
        descripcion: "Suplemento esencial para la recuperación y el rendimiento. Los BCAA's ayudan a reducir el daño muscular y mejorar la síntesis de proteínas. ¡Maximiza tus ganancias y minimiza el dolor muscular!"
    },
    {
        id: 6,
        title: "Guantes de Entrenamiento",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/guantesEntrenamiento.jpeg",
        descripcion: "Protege tus manos mientras entrenas con estos guantes de alta calidad. Perfectos para levantar pesas, hacer flexiones o practicar boxeo. ¡Entrena con seguridad y sin preocupaciones!"
    },
    {
        id: 7,
        title: "Cuerda para Saltar Profesional",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/cuerdaSaltar.jpeg",
        descripcion: "Entrena tu resistencia cardiovascular y mejora tu coordinación con esta cuerda para saltar de alta calidad. Ideal para ejercicios de calentamiento o cardio intensivo. ¡Rompe tus propios récords de velocidad y resistencia!"
    },
    {
        id: 8,
        title: "Banda Elástica de Resistencia",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/bandaElastica.jpg",
        descripcion: "Añade resistencia a tus ejercicios de fuerza y flexibilidad. Esta banda es perfecta para mejorar la movilidad y aumentar la intensidad de tus entrenamientos. ¡Un accesorio esencial para cualquier rutina de gimnasio!"
    },
    {
        id: 9,
        title: "Rodillera de Compresión",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/rodillera.jpeg",
        descripcion: "Diseñada para brindar soporte a tus rodillas durante entrenamientos intensivos. Alivia el dolor y reduce la inflamación, lo que permite un mejor rendimiento en tus entrenamientos. ¡Siente la diferencia en cada movimiento!"
    },
    {
        id: 10,
        title: "Shaker para Suplementos",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/shaker.png",
        descripcion: "El shaker ideal para mezclar tus suplementos en segundos. Con diseño antideslizante y tapa hermética, este shaker es perfecto para llevarlo a cualquier parte. ¡No más grumos, solo una mezcla suave y perfecta!"
    },
    {
        id: 11,
        title: "Zapatillas de Running",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 1,
        imageUrl: ".././assets/imagenes/zapatilla.jpeg",
        descripcion: "Perfectas para corredores y entrenamientos en gimnasio. Estas zapatillas están diseñadas para proporcionar comodidad y soporte en cada paso, mejorando tu rendimiento en cada carrera. ¡Corre más rápido y más lejos sin dolor!"
    },
    {
        id: 12,
        title: "Mancuernas de Hierro",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/mancuernas.webp",
        descripcion: "Estas mancuernas de hierro son ideales para entrenamientos de fuerza. Su diseño duradero y su peso ajustable te permiten personalizar tus entrenamientos de acuerdo con tus objetivos. ¡Fortalece tus músculos y alcanza tus metas!"
    },
    {
        id: 13,
        title: "Suplemento de L-Carnitina",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 2,
        imageUrl: ".././assets/imagenes/lcarnitina.jpeg",
        descripcion: "La L-Carnitina es un potente quemador de grasa que mejora tu energía durante los entrenamientos. Ideal para quienes buscan perder peso de manera eficiente y saludable. ¡Activa tu metabolismo y quema esas calorías extra!"
    },
    {
        id: 14,
        title: "Banqueta de Entrenamiento Ajustable",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: ".././assets/imagenes/banqueta.jpeg",
        descripcion: "Una banca robusta y ajustable que te permite entrenar cómodamente en diferentes posiciones. Perfecta para ejercicios de fuerza, como press de banca y ejercicios de abdominales. ¡Una inversión esencial para tu gimnasio en casa!"
    },
    {
        id: 15,
        title: "Botella de Agua de Acero Inoxidable",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 3,
        imageUrl: "../assets/imagenes/botellaAgua.jpeg",
        descripcion: "Mantente hidratado durante tus entrenamientos con esta botella de acero inoxidable. Con aislamiento térmico para mantener tus bebidas frías o calientes por horas. ¡Diseño elegante y duradero para el gimnasio y la oficina!"
    },
    {
        id: 16,
        title: "Suplemento de Glutamina",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 2,
        imageUrl: ".././assets/imagenes/glutamina.jpeg",
        descripcion: "Ayuda a mejorar la recuperación muscular y fortalecer tu sistema inmune. Ideal para después de entrenamientos intensos, la Glutamina te ayuda a minimizar el daño muscular y maximizar tus ganancias. ¡Recupérate más rápido y con menos dolor!"
    },
    {
        id: 17,
        title: "Pantalón Corto Deportivo",
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        idCategoria: 1,
        imageUrl: ".././assets/imagenes/shorts.png",
        descripcion: "Cómodo y transpirable, ideal para entrenamientos en climas cálidos o actividades de alto rendimiento. Su diseño con tecnología de secado rápido y su ajuste perfecto lo hacen imprescindible para el gimnasio. ¡Dale libertad a tus piernas!"
    },
    {
        id: 18,
        title: "Suplemento de Óxido Nítrico",
        idCategoria: 2,
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        imageUrl: ".././assets/imagenes/oxnitrico.png",
        descripcion: "Aumenta tu energía y resistencia con este suplemento de óxido nítrico. Perfecto para mejorar el rendimiento en entrenamientos de alta intensidad. ¡Siente el poder de un entrenamiento más explosivo y con más resistencia!"
    },
    {
        id: 19,
        title: "Estera de Yoga Antideslizante",
        idCategoria: 3,
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        imageUrl: ".././assets/imagenes/esterayoga.png",
        descripcion: "Perfecta para tus rutinas de yoga o estiramientos. Esta estera antideslizante asegura un buen agarre y comodidad en cada postura. ¡Mantén el equilibrio y la estabilidad durante tus sesiones de yoga!"
    },
    {
        id: 20,
        title: "Reloj Deportivo con Monitoreo de Frecuencia Cardíaca",
        idCategoria: 3,
        price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
        imageUrl: ".././assets/imagenes/reloj.png",
        descripcion: "Mantén un seguimiento de tu rendimiento con este reloj deportivo. Con monitoreo de frecuencia cardíaca, contador de calorías y seguimiento de actividades. ¡Esencial para entrenamientos más inteligentes y efectivos!"
    }
]
