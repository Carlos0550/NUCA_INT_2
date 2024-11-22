

export const productos = [
  {
    id: 1,
    title: "Camiseta de Entrenamiento",
    price: Math.floor(Math.random() * (15000 - 5000 + 1)) + 1000,
    idCategoria: 1,
    imageUrl: "../assets/imagenes/remeraZeusGym.webp",
    descripcion: `<p><strong>Confort y estilo para tus entrenamientos.</strong> Esta camiseta está diseñada pensando en atletas que buscan rendimiento y comodidad en cada movimiento.</p>
  <ul>
    <li><strong>Material de alta calidad:</strong> Fabricada con una mezcla de poliéster y elastano, es ligera, suave al tacto y de secado rápido.</li>
    <li><strong>Transpirabilidad:</strong> Su tecnología de ventilación ayuda a mantenerte fresco incluso durante los entrenamientos más intensos.</li>
    <li><strong>Ajuste perfecto:</strong> Corte ergonómico que se adapta a la forma del cuerpo, proporcionando libertad de movimiento.</li>
    <li><strong>Estilo moderno:</strong> Diseño elegante con detalles minimalistas, disponible en varios colores y tallas para todos los gustos.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Gracias a su diseño y materiales de última generación, esta camiseta te ofrece:</p>
  <ol>
    <li>Mayor rendimiento durante el ejercicio.</li>
    <li>Comodidad prolongada, ideal para largas sesiones de entrenamiento.</li>
    <li>Un look profesional tanto en el gimnasio como al aire libre.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Poliéster 85%, Elastano 15%</td>
    </tr>
    <tr>
      <th>Tallas disponibles</th>
      <td>S, M, L, XL</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Blanco, Gris, Azul</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Perfecta para entrenamiento en el gimnasio, actividades al aire libre como running o ciclismo, y para días de descanso casual con estilo deportivo.
  </p>
  <h3>Cuidado del producto:</h3>
  <ul>
    <li>Lavar a máquina en agua fría.</li>
    <li>No usar lejía.</li>
    <li>Secar al aire o a baja temperatura.</li>
    <li>No planchar.</li>
  </ul>`,
    opcionesCompra: {
      colores: [1, 2, 3, 4],
      tallas: [],
      tamanios: [],
      sabores: []
    }
  },
  {
    id: 2,
    title: "Pantalón Deportivo de Alta Compresión",
    price: Math.floor(Math.random() * (15000 - 5000 + 1)) + 1000,
    idCategoria: 1,
    imageUrl: ".././assets/imagenes/pantCompresion.png",
    descripcion: `<p><strong>El pantalón perfecto para un ajuste ceñido y cómodo.</strong> Diseñado para quienes buscan maximizar su rendimiento y recuperación, este pantalón es ideal para entrenamientos intensos y sesiones de recuperación activa.</p>
  <ul>
    <li><strong>Tecnología de compresión avanzada:</strong> Mejora la circulación sanguínea, lo que ayuda a reducir la fatiga muscular y acelera la recuperación.</li>
    <li><strong>Tejido transpirable y flexible:</strong> Fabricado con materiales que absorben la humedad y permiten una ventilación óptima, manteniéndote seco y cómodo.</li>
    <li><strong>Ajuste ergonómico:</strong> Se adapta perfectamente al cuerpo, ofreciendo soporte en las zonas clave sin restringir el movimiento.</li>
    <li><strong>Durabilidad excepcional:</strong> Resistente al desgaste, ideal para entrenamientos frecuentes e intensos.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Este pantalón está diseñado para proporcionarte:</p>
  <ol>
    <li>Mayor rendimiento y resistencia durante los entrenamientos.</li>
    <li>Reducción de la vibración muscular para minimizar el riesgo de lesiones.</li>
    <li>Un soporte cómodo y estable, incluso en movimientos exigentes.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Nylon 75%, Elastano 25%</td>
    </tr>
    <tr>
      <th>Tallas disponibles</th>
      <td>S, M, L, XL</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Gris Oscuro, Azul Marino</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Ideal para actividades de alto impacto como running, crossfit, levantamiento de pesas y recuperación activa post-entrenamiento.
  </p>
  <h3>Cuidado del producto:</h3>
  <ul>
    <li>Lavar a máquina en agua fría con colores similares.</li>
    <li>No usar suavizantes ni lejía.</li>
    <li>Secar al aire para prolongar la vida útil del tejido.</li>
    <li>No planchar ni lavar en seco.</li>
  </ul>`,
    opcionesCompra: {
      colores: [1, 5, 6],
      tallas: [1,2,3,4],
      tamanios: [],
      sabores: []
    }
  },
  {
    id: 3,
    title: "Proteína Whey 100%",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 2,
    imageUrl: ".././assets/imagenes/proteina.png",
    descripcion: `<p><strong>La proteína ideal para desarrollar músculo y recuperarte después de tus entrenamientos.</strong> Diseñada para atletas y personas activas, esta Whey de alta calidad te ayuda a alcanzar tus metas físicas al proporcionar los nutrientes esenciales que tu cuerpo necesita.</p>
  <ul>
    <li><strong>25 gramos de proteína por porción:</strong> Perfecta para la construcción y reparación muscular después de actividades intensas.</li>
    <li><strong>Bajo en carbohidratos y grasas:</strong> Ideal para dietas enfocadas en el control de peso y definición muscular.</li>
    <li><strong>Fácil digestión:</strong> Contiene enzimas digestivas que mejoran la absorción de nutrientes y reducen molestias estomacales.</li>
    <li><strong>Deliciosos sabores:</strong> Disponibles en Chocolate, Vainilla y Fresa, para disfrutar al máximo cada batido.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta proteína, obtendrás:</p>
  <ol>
    <li>Un aporte óptimo de aminoácidos esenciales, incluyendo BCAAs, para maximizar el crecimiento muscular.</li>
    <li>Recuperación más rápida y efectiva después del ejercicio.</li>
    <li>Mayor energía y rendimiento durante tus entrenamientos.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Tamaño</th>
      <td>2 lb (907 g) y 5 lb (2.27 kg)</td>
    </tr>
    <tr>
      <th>Porciones por envase</th>
      <td>28 porciones (2 lb) y 70 porciones (5 lb)</td>
    </tr>
    <tr>
      <th>Ingredientes principales</th>
      <td>Proteína de suero aislada, concentrado de proteína de suero, enzimas digestivas</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Mezclar 1 scoop (aproximadamente 30 g) en 250-300 ml de agua o leche descremada. Consumir después del entrenamiento o como complemento nutricional durante el día.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Úsalo en recetas como pancakes o smoothies para una dieta más versátil.</li>
    <li>Complementa su uso con una alimentación balanceada para mejores resultados.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [3],
      tamanios: [1, 2],
      tallas: [],
      colores: []
    }
  },
  {
    id: 4,
    title: "Creatina Monohidratada",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 2,
    imageUrl: ".././assets/imagenes/creatina.jpeg",
    descripcion: `<p><strong>Esencial para aumentar la fuerza y el rendimiento físico.</strong> Este suplemento de alta pureza es ideal para deportistas que buscan mejorar su explosividad, resistencia y recuperación muscular.</p>
  <ul>
    <li><strong>Aumenta la fuerza:</strong> Favorece la producción de energía inmediata para maximizar el rendimiento en actividades de alta intensidad.</li>
    <li><strong>Mejora la resistencia:</strong> Ayuda a prolongar el tiempo de esfuerzo durante entrenamientos intensos.</li>
    <li><strong>Apoya la recuperación muscular:</strong> Reduce el daño muscular y mejora la recuperación entre sesiones de ejercicio.</li>
    <li><strong>Fórmula pura:</strong> Creatina monohidratada 100% micronizada para una mejor disolución y absorción.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este suplemento, obtendrás:</p>
  <ol>
    <li>Mayor energía durante ejercicios de fuerza y potencia.</li>
    <li>Incremento en la masa muscular magra con el uso constante y entrenamientos adecuados.</li>
    <li>Recuperación más eficiente, reduciendo la fatiga post-entrenamiento.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Tamaño</th>
      <td>300 g y 1 kg</td>
    </tr>
    <tr>
      <th>Porciones por envase</th>
      <td>60 porciones (300 g) y 200 porciones (1 kg)</td>
    </tr>
    <tr>
      <th>Ingrediente principal</th>
      <td>Creatina monohidratada 100% pura</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Consumir 1 scoop (5 g) mezclado en 200-250 ml de agua o jugo. Tomar diariamente, preferiblemente después del entrenamiento o junto con una comida rica en carbohidratos.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Hidrátate adecuadamente mientras consumes creatina para maximizar sus beneficios.</li>
    <li>Úsala de manera constante durante 4-6 semanas para resultados óptimos.</li>
    <li>Perfecta para fases de carga y mantenimiento según tu plan de entrenamiento.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [3],
      tamanios: [3, 4],
      colores: [],
      talles: []
    }
  },
  {
    id: 5,
    title: "BCAA's Aminoácidos Ramificados",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 2,
    imageUrl: ".././assets/imagenes/bcaa.jpeg",
    descripcion: `<p><strong>El suplemento esencial para la recuperación y el rendimiento.</strong> Diseñado para atletas y entusiastas del fitness, los BCAA's son clave para potenciar tus entrenamientos y acelerar tu recuperación muscular.</p>
  <ul>
    <li><strong>Mejora la síntesis de proteínas:</strong> Favorece el crecimiento y la reparación muscular después de entrenamientos intensos.</li>
    <li><strong>Reduce el daño muscular:</strong> Disminuye la degradación de proteínas durante el ejercicio, ayudando a preservar la masa muscular.</li>
    <li><strong>Acelera la recuperación:</strong> Minimiza el dolor muscular de inicio tardío (DOMS), permitiéndote entrenar con más frecuencia.</li>
    <li><strong>Relación óptima 2:1:1:</strong> Proporción equilibrada de leucina, isoleucina y valina para resultados efectivos.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con los BCAA's, disfrutarás de:</p>
  <ol>
    <li>Mayor resistencia durante entrenamientos prolongados.</li>
    <li>Reducción de la fatiga central, manteniendo la energía y el enfoque.</li>
    <li>Un soporte esencial en fases de definición muscular.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Formato</th>
      <td>Polvo y cápsulas</td>
    </tr>
    <tr>
      <th>Tamaño</th>
      <td>300 g (polvo) y 120 cápsulas</td>
    </tr>
    <tr>
      <th>Sabor</th>
      <td>Limón, Naranja y Sin Sabor</td>
    </tr>
    <tr>
      <th>Ingredientes principales</th>
      <td>Leucina, Isoleucina, Valina</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Tomar 1 scoop (10 g) mezclado en 300 ml de agua antes, durante o después del entrenamiento. En cápsulas, consumir 4 cápsulas al día, distribuidas según tu rutina.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Combínalos con tu batido de proteína para optimizar el rendimiento y la recuperación.</li>
    <li>Ideales para entrenamientos en ayunas, ya que protegen la masa muscular.</li>
    <li>Complemento perfecto en programas de pérdida de grasa y definición.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [3],
      tamanios: [3, 5],
      tallas: [],
      colores: []
    }
  },
  {
    id: 6,
    title: "Guantes de Entrenamiento",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/guantesEntrenamiento.jpeg",
    descripcion: `<p><strong>Protege tus manos mientras entrenas.</strong> Diseñados para ofrecer comodidad, soporte y durabilidad, estos guantes son el complemento ideal para cualquier tipo de entrenamiento.</p>
  <ul>
    <li><strong>Protección superior:</strong> Almohadillas estratégicamente colocadas para reducir la presión y prevenir ampollas y callosidades.</li>
    <li><strong>Agarre mejorado:</strong> Material antideslizante en las palmas para mayor seguridad al levantar pesas o usar barras.</li>
    <li><strong>Transpirabilidad óptima:</strong> Tejidos de malla que permiten la ventilación, manteniendo tus manos frescas y secas.</li>
    <li><strong>Cierre ajustable:</strong> Sistema de velcro para un ajuste personalizado y cómodo.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con estos guantes, obtendrás:</p>
  <ol>
    <li>Mayor seguridad y estabilidad durante el entrenamiento.</li>
    <li>Prevención de lesiones comunes en las manos, como ampollas y cortes.</li>
    <li>Un agarre firme que te permitirá concentrarte en tu rendimiento.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Cuero sintético, malla transpirable y goma antideslizante</td>
    </tr>
    <tr>
      <th>Tallas</th>
      <td>S, M, L, XL</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Gris y Rojo</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Úsalos en actividades como levantamiento de pesas, entrenamiento funcional, boxeo o ejercicios en barras para proteger tus manos y mejorar tu agarre.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Límpialos regularmente con un paño húmedo para mantenerlos en óptimas condiciones.</li>
    <li>No los laves en lavadora para evitar dañar los materiales.</li>
    <li>Déjalos secar al aire después de cada uso para prevenir malos olores.</li>
  </ul>`,
    opcionesCompra: {
      tallas: [1, 2, 3, 4],
      colores: [1, 3, 7],
      tamanios: [],
      sabores: []
    }
  },
  {
    id: 7,
    title: "Cuerda para Saltar Profesional",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/cuerdaSaltar.jpeg",
    descripcion: `<p><strong>Entrena tu resistencia cardiovascular y mejora tu coordinación.</strong> Esta cuerda de alta calidad está diseñada para acompañarte en tus sesiones de calentamiento, cardio intensivo y entrenamientos funcionales, ayudándote a superar tus límites.</p>
  <ul>
    <li><strong>Ajustable y ergonómica:</strong> Longitud fácilmente ajustable para adaptarse a cualquier estatura y asas cómodas que ofrecen un agarre firme y antideslizante.</li>
    <li><strong>Rendimiento superior:</strong> Sistema de rodamientos de alta velocidad para un giro fluido y sin interrupciones, ideal para ejercicios avanzados como double unders.</li>
    <li><strong>Material resistente:</strong> Cable de acero recubierto de PVC para mayor durabilidad y uso prolongado en cualquier superficie.</li>
    <li><strong>Ligera y portátil:</strong> Perfecta para llevar a cualquier lugar y complementar tus rutinas en casa, el gimnasio o al aire libre.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta cuerda para saltar, disfrutarás de:</p>
  <ol>
    <li>Mejora en la resistencia cardiovascular y quema de calorías eficiente.</li>
    <li>Mayor coordinación, agilidad y equilibrio.</li>
    <li>Versatilidad para adaptarse a diferentes niveles de entrenamiento, desde principiantes hasta avanzados.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Cable de acero recubierto, asas de plástico con revestimiento de espuma</td>
    </tr>
    <tr>
      <th>Longitud</th>
      <td>3 metros (ajustable)</td>
    </tr>
    <tr>
      <th>Peso</th>
      <td>200 g</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Azul y Rojo</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Úsala para ejercicios de calentamiento, circuitos de alta intensidad o entrenamientos de resistencia. Ajusta la longitud para que se adapte perfectamente a tu estatura y estilo de salto.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Practica con sesiones cortas al principio para acostumbrarte a su velocidad y fluidez.</li>
    <li>Utiliza calzado adecuado para proteger tus articulaciones mientras saltas.</li>
    <li>Evita superficies abrasivas para prolongar la vida útil del recubrimiento.</li>
  </ul>`,
    opcionesCompra: {
      tallas: [1, 2, 3, 4],
      colores: [1, 4, 7],
      sabores: [],
      tamanios: []
    }
  },
  {
    id: 8,
    title: "Banda Elástica de Resistencia",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/bandaElastica.jpg",
    descripcion: `<p><strong>Añade resistencia a tus ejercicios de fuerza y flexibilidad.</strong> Esta banda es perfecta para intensificar tus entrenamientos y mejorar la movilidad, ayudándote a lograr un entrenamiento más completo y efectivo.</p>
  <ul>
    <li><strong>Versatilidad en entrenamientos:</strong> Úsala para mejorar la resistencia muscular, aumentar la intensidad de ejercicios de fuerza o como herramienta para estiramientos y movilidad.</li>
    <li><strong>Mejora de la flexibilidad:</strong> Ideal para estiramientos dinámicos y trabajo de movilidad articular, contribuyendo a un rango de movimiento más amplio.</li>
    <li><strong>Material resistente y duradero:</strong> Hecha con látex de alta calidad que asegura una larga vida útil y un estiramiento constante sin perder su forma.</li>
    <li><strong>Compacta y fácil de transportar:</strong> Su diseño liviano y flexible la hace ideal para entrenar en casa, en el gimnasio o llevarla en tu mochila para entrenamientos al aire libre.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta banda elástica, disfrutarás de:</p>
  <ol>
    <li>Mayor resistencia y desafío en los ejercicios, lo que acelera los resultados en fuerza y tonificación.</li>
    <li>Mejora de la flexibilidad y movilidad, evitando lesiones y aumentando el rendimiento deportivo.</li>
    <li>Portabilidad, para entrenar en cualquier lugar con un accesorio ligero y práctico.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Látex natural</td>
    </tr>
    <tr>
      <th>Resistencia</th>
      <td>Ligera, media y fuerte (según el modelo)</td>
    </tr>
    <tr>
      <th>Longitud</th>
      <td>1.2 metros</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Rojo, Azul y Verde</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Integra la banda en ejercicios como sentadillas, flexiones, estiramientos de piernas, y trabajo de movilidad en hombros o caderas para mejorar tu rendimiento.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Asegúrate de no estirarla más allá de su capacidad para evitar que pierda elasticidad.</li>
    <li>Guárdala en un lugar fresco y seco para mantener su durabilidad.</li>
    <li>Para una mayor intensidad, combina diferentes resistencias en una misma rutina de ejercicios.</li>
  </ul>`,
    opcionesCompra: {
      colores: [7, 4, 8],
      tallas: [],
      tamanios: [],
      sabores: []
    }
  },
  {
    id: 9,
    title: "Rodillera de Compresión",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/rodillera.jpeg",
    descripcion: ` <p><strong>Soporte y alivio para tus rodillas durante entrenamientos intensivos.</strong> Diseñada para ayudar a reducir el dolor y la inflamación, esta rodillera de compresión es ideal para mantener tus rodillas estables mientras realizas ejercicios de alto impacto.</p>
  <ul>
    <li><strong>Compresión estratégica:</strong> Proporciona un ajuste ceñido que mejora la circulación sanguínea y reduce la hinchazón, ayudando a prevenir lesiones.</li>
    <li><strong>Alivio del dolor:</strong> Ideal para quienes sufren de dolor articular o lesiones previas, aliviando la presión en la articulación de la rodilla.</li>
    <li><strong>Material de alta calidad:</strong> Hecha con un tejido elástico y transpirable, que garantiza comodidad durante el uso prolongado y no restringe el movimiento.</li>
    <li><strong>Versatilidad:</strong> Perfecta para deportes como correr, levantar pesas, practicar crossfit o para sesiones de rehabilitación física.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta rodillera, disfrutarás de:</p>
  <ol>
    <li>Mayor estabilidad en la articulación de la rodilla, lo que mejora el rendimiento en ejercicios de alto impacto.</li>
    <li>Reducción de la inflamación y del dolor post-entrenamiento.</li>
    <li>Mayor seguridad al realizar movimientos explosivos, como saltos y sprints.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Poliéster, elastano y goma</td>
    </tr>
    <tr>
      <th>Tamaño</th>
      <td>Disponible en tallas S, M, L y XL</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Gris y Azul</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Usa la rodillera durante cualquier actividad que implique alto impacto o movimiento repetitivo, como levantamiento de pesas, correr, o hacer ejercicios de salto.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Asegúrate de ajustar la rodillera correctamente para que quede ceñida pero no incómoda.</li>
    <li>Lávalo a mano y evita el uso de secadora para mantener la elasticidad del material.</li>
    <li>Si el dolor persiste o se intensifica, consulta con un profesional de la salud.</li>
  </ul>`,
    opcionesCompra: {
      tamanios: [],
      colores: [1, 3, 4],
      sabores: [],
      tallas: [1, 2, 3, 4]
    }
  },
  {
    id: 10,
    title: "Shaker para Suplementos",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/shaker.png",
    descripcion: `<p><strong>Mezcla tus suplementos en segundos con facilidad.</strong> Este shaker de alta calidad está diseñado para ofrecerte una mezcla suave y perfecta, sin grumos, gracias a su eficiente sistema de mezclado y su tapa hermética. Ideal para llevarlo contigo a donde vayas.</p>
  <ul>
    <li><strong>Diseño antideslizante:</strong> La base antideslizante asegura un agarre seguro durante el uso, evitando que se deslice, incluso cuando está lleno.</li>
    <li><strong>Tapa hermética:</strong> Con un cierre seguro, evitarás derrames y asegurarte de que tu suplemento se mantenga bien mezclado hasta el momento de consumirlo.</li>
    <li><strong>Material duradero:</strong> Fabricado con plásticos de alta calidad, resistentes y aptos para uso constante, sin BPA y completamente seguro para alimentos.</li>
    <li><strong>Portátil y práctico:</strong> Su tamaño compacto te permite llevarlo en tu mochila o bolso de gimnasio sin ocupar mucho espacio, siendo ideal para llevarlo a todas partes.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este shaker, disfrutarás de:</p>
  <ol>
    <li>Mezclas perfectas y sin grumos, asegurando una experiencia de consumo más agradable.</li>
    <li>Comodidad y facilidad de transporte para llevar tus suplementos en cualquier momento del día.</li>
    <li>Durabilidad y resistencia, garantizando que el shaker soporta el uso diario sin deformarse ni perder funcionalidad.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Capacidad</th>
      <td>600 ml</td>
    </tr>
    <tr>
      <th>Material</th>
      <td>Plástico libre de BPA</td>
    </tr>
    <tr>
      <th>Color</th>
      <td>Negro, Blanco, Azul</td>
    </tr>
    <tr>
      <th>Componentes</th>
      <td>Filtro de malla, tapa hermética, base antideslizante</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Añade tu suplemento en polvo, agrega agua o tu líquido preferido, cierra bien la tapa y agita enérgicamente. Ideal para batidos de proteínas, aminoácidos o cualquier suplemento en polvo.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Para evitar olores, limpia el shaker después de cada uso con agua tibia y jabón suave.</li>
    <li>Si no deseas que tu suplemento se quede pegado en las paredes, agrega el líquido primero y luego el polvo.</li>
    <li>Utiliza el shaker para mezclar no solo suplementos, sino también bebidas como jugos o batidos caseros.</li>
  </ul>`,
    opcionesCompra: {
      tamanios: [6],
      colores: [1, 2, 4],
      talles: [],
      sabores: []
    }
  },
  {
    id: 11,
    title: "Zapatillas de Running",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 1,
    imageUrl: ".././assets/imagenes/zapatilla.jpeg",
    descripcion: ` <p><strong>Comodidad y soporte en cada paso para corredores y entrenamientos en gimnasio.</strong> Estas zapatillas están diseñadas específicamente para brindar estabilidad, flexibilidad y un ajuste perfecto, permitiéndote mejorar tu rendimiento y correr más rápido y más lejos sin dolor.</p>
  <ul>
    <li><strong>Amortiguación avanzada:</strong> Su tecnología de amortiguación reduce el impacto en cada pisada, protegiendo tus articulaciones durante carreras largas o entrenamientos de alta intensidad.</li>
    <li><strong>Soporte en el arco:</strong> Diseñadas para brindar un excelente soporte en el arco del pie, previniendo lesiones y mejorando la estabilidad durante el movimiento.</li>
    <li><strong>Suela antideslizante:</strong> La suela de goma de alta calidad asegura un agarre firme, tanto en superficies secas como mojadas, ofreciendo seguridad y confianza al correr.</li>
    <li><strong>Diseño transpirable:</strong> Con un material superior de malla que permite una excelente ventilación, manteniendo tus pies frescos y secos incluso durante los entrenamientos más intensos.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con estas zapatillas, disfrutarás de:</p>
  <ol>
    <li>Comodidad y reducción de la fatiga durante entrenamientos prolongados o carreras.</li>
    <li>Soporte adicional para evitar lesiones, especialmente en los pies y tobillos.</li>
    <li>Mayor durabilidad y rendimiento en diversos tipos de terreno, ya sea en la pista, el gimnasio o caminos al aire libre.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Parte superior de malla, suela de goma antideslizante</td>
    </tr>
    <tr>
      <th>Amortiguación</th>
      <td>Espuma EVA de alta densidad</td>
    </tr>
    <tr>
      <th>Tamaños</th>
      <td>Desde 36 hasta 44 (EU)</td>
    </tr>
    <tr>
      <th>Colores</th>
      <td>Negro, Azul, Gris</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Estas zapatillas son perfectas para carreras de larga distancia, entrenamientos en el gimnasio y actividades de alto impacto. Úsalas para proteger tus pies y maximizar tu rendimiento.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Para mayor durabilidad, limpia las zapatillas después de cada uso y mantenlas secas.</li>
    <li>Elige el tamaño adecuado para evitar molestias y asegurar un ajuste cómodo durante las carreras.</li>
    <li>Si corres en terrenos irregulares o mojados, asegúrate de revisar la suela para evitar desgastes excesivos.</li>
  </ul>`,
    opcionesCompra: {
      tamanios: [],
      colores: [1, 4, 3],
      tallas: [5, 6, 7, 8, 9, 10, 11, 12, 13],
      sabores: []
    }
  },
  {
    id: 12,
    title: "Mancuernas de Hierro",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/mancuernas.webp",
    descripcion: `<p><strong>Entrena con fuerza y durabilidad con estas mancuernas de hierro de alta calidad.</strong> Su diseño robusto y peso ajustable te permite personalizar tus entrenamientos según tus necesidades y objetivos. Perfectas para desarrollar fuerza y tonificar tus músculos, ¡alcanza tus metas de fitness con cada repetición!</p>
  <ul>
    <li><strong>Diseño de alta durabilidad:</strong> Fabricadas con hierro de alta calidad, estas mancuernas soportan entrenamientos intensivos y resisten el desgaste, manteniendo su forma y funcionalidad a lo largo del tiempo.</li>
    <li><strong>Peso ajustable:</strong> Su sistema de ajuste rápido permite añadir o quitar peso según tu nivel de entrenamiento, brindando flexibilidad para progresar a medida que aumentas tu fuerza.</li>
    <li><strong>Ergonomía y confort:</strong> Los mangos están diseñados para ofrecer un agarre seguro y cómodo, evitando deslizamientos y reduciendo la presión sobre tus manos durante el uso prolongado.</li>
    <li><strong>Versatilidad:</strong> Ideales para una variedad de ejercicios de fuerza, como press de banca, curls de bíceps y entrenamientos funcionales. Puedes usarlas tanto en casa como en el gimnasio.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Estas mancuernas ofrecen:</p>
  <ol>
    <li>Aumento de la fuerza muscular al permitirte incrementar la carga progresivamente.</li>
    <li>Mejora del tono muscular y definición gracias a su diseño versátil para ejercicios de fuerza y tonificación.</li>
    <li>Resistencia a largo plazo gracias a su material de hierro, lo que las convierte en una inversión duradera para tu rutina de entrenamiento.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Hierro fundido de alta resistencia</td>
    </tr>
    <tr>
      <th>Peso ajustable</th>
      <td>De 2 kg a 20 kg (dependiendo del modelo)</td>
    </tr>
    <tr>
      <th>Tipo de agarre</th>
      <td>Ergonómico, con superficie antideslizante</td>
    </tr>
    <tr>
      <th>Dimensiones</th>
      <td>Varían según el peso ajustado</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Utiliza estas mancuernas para ejercicios de fuerza y tonificación muscular. Asegúrate de ajustar el peso según tu nivel de fuerza y progresa gradualmente para evitar lesiones.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Cuando ajustes el peso, asegúrate de que todos los discos estén firmemente sujetos para evitar accidentes.</li>
    <li>Para un mejor rendimiento, limpia las mancuernas regularmente y asegúrate de mantenerlas en un lugar seco para evitar la corrosión.</li>
    <li>Si entrenas en casa, asegúrate de tener un espacio adecuado para maniobrar las mancuernas de forma segura.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [],
      tamanios: [13, 14, 15, 16, 17],
      talles: [],
      colores: []
    }
  },
  {
    id: 13,
    title: "Suplemento de L-Carnitina",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 2,
    imageUrl: ".././assets/imagenes/lcarnitina.jpeg",
    descripcion: ` <p><strong>Potente quemador de grasa y fuente de energía para tus entrenamientos.</strong> La L-Carnitina es un suplemento esencial para activar tu metabolismo y quemar calorías de manera eficiente y saludable. Perfecto para quienes buscan mejorar su rendimiento físico y perder peso de forma natural. ¡Activa tu energía y alcanza tus objetivos más rápido!</p>
  <ul>
    <li><strong>Quema de grasa eficiente:</strong> La L-Carnitina ayuda a transportar los ácidos grasos hacia las células donde se convierten en energía, facilitando la quema de grasa durante el ejercicio.</li>
    <li><strong>Aumento de energía:</strong> Potencia tu energía y resistencia durante los entrenamientos, lo que te permite rendir mejor y alcanzar un mayor rendimiento físico.</li>
    <li><strong>Mejora el metabolismo:</strong> Al activar el metabolismo, este suplemento facilita la reducción de grasa corporal y mejora el proceso de recuperación post-entrenamiento.</li>
    <li><strong>Composición natural:</strong> Fórmula natural y libre de estimulantes, lo que hace que sea adecuado para personas con sensibilidad a productos con cafeína o estimulantes.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este suplemento disfrutarás de:</p>
  <ol>
    <li>Aumento de la oxidación de grasas durante el ejercicio, ayudando a la pérdida de peso.</li>
    <li>Mejora del rendimiento físico, ya que aumenta la energía y reduce la fatiga muscular.</li>
    <li>Recuperación más rápida después de entrenamientos intensos, ayudando a reducir el tiempo de descanso necesario entre sesiones.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Composición</th>
      <td>L-Carnitina 1000 mg por porción</td>
    </tr>
    <tr>
      <th>Presentación</th>
      <td>Botella de 60 cápsulas</td>
    </tr>
    <tr>
      <th>Uso recomendado</th>
      <td>Tomar 1 cápsula al día, preferentemente 30 minutos antes del entrenamiento</td>
    </tr>
    <tr>
      <th>Sin estimulantes</th>
      <td>Sí</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Para mejores resultados, toma la L-Carnitina antes de tu entrenamiento y acompáñala de una rutina de ejercicio regular y una dieta equilibrada. No se recomienda exceder la dosis diaria recomendada.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Combina el suplemento con una rutina de ejercicios cardiovasculares para potenciar los efectos de quema de grasa.</li>
    <li>Si eres sensible a otros suplementos, comienza con una dosis menor para evaluar cómo responde tu cuerpo.</li>
    <li>Para optimizar los resultados, asegúrate de mantener una hidratación adecuada durante tus entrenamientos.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [],
      tamanios: [7],
      talles: [],
      colores: []
    }
  },
  {
    id: 14,
    title: "Banqueta de Entrenamiento Ajustable",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: ".././assets/imagenes/banqueta.jpeg",
    descripcion: `<p><strong>Entrena con comodidad y versatilidad en tu gimnasio en casa.</strong> Esta banca robusta y ajustable está diseñada para ofrecerte la máxima estabilidad y soporte durante tus entrenamientos de fuerza. Perfecta para realizar ejercicios de press de banca, abdominales y más, con la posibilidad de ajustar la inclinación para adaptarse a diferentes movimientos y posturas. ¡Haz de tu entrenamiento una experiencia cómoda y efectiva!</p>
  <ul>
    <li><strong>Ajustable:</strong> La banqueta cuenta con múltiples posiciones de inclinación para adaptarse a tus necesidades, permitiéndote realizar una amplia variedad de ejercicios de fuerza como press de banca, flys, abdominales, entre otros.</li>
    <li><strong>Diseño robusto:</strong> Construida con materiales de alta calidad, esta banca es capaz de soportar pesos elevados sin comprometer su estabilidad, asegurando una base firme durante tus entrenamientos más intensivos.</li>
    <li><strong>Comodidad y soporte:</strong> Su asiento y respaldo están diseñados para brindar un soporte ergonómico, evitando molestias en la espalda o el cuello durante las sesiones de entrenamiento prolongadas.</li>
    <li><strong>Fácil almacenamiento:</strong> Su diseño compacto y la posibilidad de plegarse hacen que sea fácil de guardar cuando no la estés usando, ahorrando espacio en tu hogar o gimnasio.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta banqueta podrás disfrutar de:</p>
  <ol>
    <li>Entrenamientos más variados, gracias a la capacidad de ajustar la inclinación del asiento para trabajar diferentes músculos de manera eficiente.</li>
    <li>Aumento de la estabilidad en tus ejercicios, permitiéndote realizar movimientos con mayor seguridad y control.</li>
    <li>Comodidad en cada repetición, evitando incomodidades o lesiones gracias al soporte ergonómico y a la calidad de los materiales.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material de construcción</th>
      <td>Acero de alta resistencia y almohadillas de espuma de alta densidad</td>
    </tr>
    <tr>
      <th>Posiciones de inclinación</th>
      <td>6 posiciones ajustables (incluyendo plano, inclinada y declinada)</td>
    </tr>
    <tr>
      <th>Capacidad máxima de peso</th>
      <td>250 kg</td>
    </tr>
    <tr>
      <th>Dimensiones</th>
      <td>120 cm x 50 cm x 40 cm (ajustable según la inclinación)</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Ajusta la banqueta antes de cada entrenamiento según el tipo de ejercicio que vayas a realizar. Asegúrate de que las posiciones de los tornillos de ajuste estén firmemente bloqueadas para garantizar la seguridad durante el uso.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Si planeas usarla para entrenamientos de press de banca con pesos elevados, considera usar un soporte adicional como un rack de pesas para mayor seguridad.</li>
    <li>Para maximizar la durabilidad, limpia la banqueta regularmente y evita dejarla expuesta a condiciones de humedad.</li>
    <li>Cuando no esté en uso, pliega la banqueta para ahorrar espacio y mantenerla en buen estado.</li>
  </ul>`,
    opcionesCompra: {
      sabores: [],
      tamanios: [],
      talles: [],
      colores: []
    }
  },
  {
    id: 15,
    title: "Botella de Agua de Acero Inoxidable",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 3,
    imageUrl: "../assets/imagenes/botellaAgua.jpeg",
    descripcion: `<p><strong>La botella perfecta para mantenerte hidratado, ya sea en el gimnasio o en la oficina.</strong> Hecha de acero inoxidable de alta calidad, esta botella cuenta con aislamiento térmico, manteniendo tus bebidas frías o calientes por horas. Su diseño elegante y duradero la convierte en una opción ideal para quienes buscan funcionalidad, estilo y resistencia. ¡Hidrátate de manera inteligente mientras cuidas el medio ambiente!</p>
  <ul>
    <li><strong>Aislamiento térmico de doble pared:</strong> Esta botella de acero inoxidable cuenta con un diseño de aislamiento de doble pared que mantiene las bebidas frías por hasta 24 horas y calientes por hasta 12 horas, permitiéndote disfrutar de tu bebida a la temperatura perfecta durante todo el día.</li>
    <li><strong>Material resistente:</strong> Fabricada en acero inoxidable de alta calidad, resistente a golpes y a la corrosión, lo que garantiza una larga durabilidad incluso con el uso diario.</li>
    <li><strong>Diseño elegante y funcional:</strong> Su diseño moderno y compacto la hace fácil de llevar, ya sea en tu mochila de gimnasio, en tu bolso o en la mano. Además, su tapa hermética evita derrames y mantiene tu bebida segura en todo momento.</li>
    <li><strong>Sin BPA y ecológica:</strong> Esta botella está libre de BPA y otros productos químicos, lo que la convierte en una opción más segura y ecológica en comparación con las botellas plásticas desechables.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con esta botella disfrutarás de:</p>
  <ol>
    <li>Hidratación continua durante tus entrenamientos, sin importar la temperatura exterior.</li>
    <li>Ahorro y sostenibilidad al reducir el uso de botellas plásticas desechables.</li>
    <li>Comodidad y estilo al llevar contigo una botella práctica, elegante y fácil de usar.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Acero inoxidable 18/8 de alta calidad</td>
    </tr>
    <tr>
      <th>Capacidad</th>
      <td>500 ml / 750 ml / 1 L (según modelo)</td>
    </tr>
    <tr>
      <th>Dimensiones</th>
      <td>25 cm de altura x 7.5 cm de diámetro (para modelo de 500 ml)</td>
    </tr>
    <tr>
      <th>Colores disponibles</th>
      <td>Negro, plateado, azul, rosa</td>
    </tr>
    <tr>
      <th>Temperatura de conservación</th>
      <td>Frío hasta 24 horas / Caliente hasta 12 horas</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Lava la botella a mano o en el lavavajillas para mantener su apariencia y funcionalidad. Evita el uso de productos abrasivos para limpiar el acero inoxidable y mantén siempre la tapa bien ajustada para evitar fugas.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Llena la botella con hielo o agua fría antes de tus entrenamientos para disfrutar de una bebida refrescante durante toda la sesión.</li>
    <li>Usa la botella para mantener tu té o café caliente durante todo el día, perfecta para llevar al trabajo o a la oficina.</li>
    <li>Si viajas frecuentemente, lleva tu botella para reducir el uso de botellas plásticas de un solo uso y contribuir al cuidado del medio ambiente.</li>
  </ul>`,
    opcionesCompra: {
      tamanios: [6],
      colores: [1, 11, 4, 10],
      tallas: [],
      sabores: []
    }
  },
  {
    id: 16,
    title: "Suplemento de Glutamina",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 2,
    imageUrl: ".././assets/imagenes/glutamina.jpeg",
    descripcion: `
             <p><strong>La Glutamina es tu aliada para la recuperación y el bienestar.</strong> Este suplemento esencial ayuda a mejorar la recuperación muscular después de entrenamientos intensos y a fortalecer tu sistema inmunológico, manteniéndote en forma incluso después de las sesiones más exigentes. Ideal para quienes buscan maximizar sus ganancias y minimizar el dolor muscular.</p>
  <ul>
    <li><strong>Recuperación acelerada:</strong> Reduce el tiempo de recuperación tras entrenamientos intensos al minimizar el daño muscular y estimular la síntesis de proteínas.</li>
    <li><strong>Fortalecimiento del sistema inmune:</strong> Ayuda a mantener tu sistema inmunológico en óptimas condiciones, especialmente durante períodos de estrés físico elevado.</li>
    <li><strong>Prevención del catabolismo muscular:</strong> La Glutamina protege tus músculos al evitar que el cuerpo utilice tejido muscular como fuente de energía durante entrenamientos prolongados.</li>
    <li><strong>Versatilidad:</strong> Se puede mezclar fácilmente con otros suplementos como proteínas, BCAA's o bebidas energéticas para personalizar tu rutina de suplementación.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este suplemento disfrutarás de:</p>
  <ol>
    <li>Menos dolor muscular después de entrenar, permitiéndote volver al gimnasio con más frecuencia y energía.</li>
    <li>Un sistema inmunológico más fuerte, ayudando a evitar enfermedades comunes mientras te mantienes activo.</li>
    <li>Mayor resistencia durante entrenamientos intensivos al mantener los niveles de Glutamina óptimos en tu cuerpo.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Presentación</th>
      <td>Polvo o cápsulas</td>
    </tr>
    <tr>
      <th>Contenido neto</th>
      <td>300 g / 500 g / 1 kg (según presentación)</td>
    </tr>
    <tr>
      <th>Uso recomendado</th>
      <td>5 g después del entrenamiento o según las indicaciones de un profesional de la salud</td>
    </tr>
    <tr>
      <th>Sabores disponibles</th>
      <td>Sin sabor (neutro)</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Disuelve una cucharada de 5 gramos en agua o tu bebida favorita después del entrenamiento. Para mejores resultados, úsalo en combinación con una dieta equilibrada y un plan de entrenamiento adecuado.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Incluye la Glutamina en tu rutina diaria si realizas entrenamientos intensivos o estás en un programa de ganancia muscular.</li>
    <li>Úsala después de sesiones de cardio o pesas para optimizar la recuperación.</li>
    <li>Consérvala en un lugar fresco y seco para mantener su calidad por más tiempo.</li>
  </ul>
        `,
    opcionesCompra: {
      tamanios: [3, 11, 12],
      colores: [],
      tallas: [],
      sabores: []
    }
  },
  {
    id: 17,
    title: "Pantalón Corto Deportivo",
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    idCategoria: 1,
    imageUrl: ".././assets/imagenes/shorts.png",
    descripcion: `
             <p><strong>Comodidad y libertad de movimiento para tus entrenamientos más intensos.</strong> Este pantalón corto deportivo es perfecto para actividades de alto rendimiento y climas cálidos. Diseñado con materiales de alta calidad, ofrece transpirabilidad, secado rápido y un ajuste cómodo que se adapta a cada movimiento. ¡Haz que tus entrenamientos sean más dinámicos y cómodos!</p>
  <ul>
    <li><strong>Material transpirable:</strong> Su tejido técnico permite una excelente ventilación, manteniéndote fresco y seco incluso en entrenamientos intensos.</li>
    <li><strong>Tecnología de secado rápido:</strong> Diseñado para absorber y evaporar rápidamente el sudor, ayudándote a mantener la comodidad durante tus sesiones de ejercicio.</li>
    <li><strong>Ajuste perfecto:</strong> Cuenta con una cintura elástica ajustable que se adapta a diferentes tipos de cuerpo y proporciona un ajuste seguro sin restringir el movimiento.</li>
    <li><strong>Bolsillos funcionales:</strong> Incluye bolsillos laterales profundos para guardar tus objetos esenciales, como llaves o el teléfono, mientras entrenas.</li>
    <li><strong>Versatilidad:</strong> Ideal para gimnasio, correr, practicar deportes o simplemente relajarte en casa.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este pantalón corto disfrutarás de:</p>
  <ol>
    <li>Mayor libertad de movimiento gracias a su diseño ergonómico.</li>
    <li>Una sensación de frescura y comodidad durante toda tu rutina.</li>
    <li>Practicidad y estilo tanto dentro como fuera del gimnasio.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>Poliéster 100% de alta calidad</td>
    </tr>
    <tr>
      <th>Tecnología</th>
      <td>Secado rápido y tejido transpirable</td>
    </tr>
    <tr>
      <th>Colores disponibles</th>
      <td>Negro, gris, azul, verde</td>
    </tr>
    <tr>
      <th>Tallas</th>
      <td>S, M, L, XL</td>
    </tr>
    <tr>
      <th>Diseño</th>
      <td>Cintura elástica con cordón ajustable</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Lava el pantalón a máquina con agua fría para mantener la calidad del tejido. Evita el uso de blanqueadores y sécalo a baja temperatura para una mayor durabilidad.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Úsalo para sesiones de cardio, pesas o yoga, adaptándose a cualquier tipo de actividad física.</li>
    <li>Combínalo con camisetas deportivas de secado rápido para un conjunto completo y cómodo.</li>
    <li>Gracias a su diseño moderno, también es ideal para salidas casuales o relajadas.</li>
  </ul>
        `,
    opcionesCompra: {
      tallas: [1, 2, 3, 4],
      colores: [1, 3, 4, 8],
      tamanios: [],
      sabores: []
    }
  },
  {
    id: 18,
    title: "Suplemento de Óxido Nítrico",
    idCategoria: 2,
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    imageUrl: ".././assets/imagenes/oxnitrico.png",
    descripcion: `
            <p><strong>Potencia tus entrenamientos con más energía y resistencia.</strong> Este suplemento de óxido nítrico está diseñado para mejorar el flujo sanguíneo, incrementar la entrega de oxígeno y nutrientes a los músculos, y potenciar tu rendimiento en entrenamientos de alta intensidad. Ideal para quienes buscan maximizar su fuerza, explosividad y resistencia.</p>
  <ul>
    <li><strong>Aumento del flujo sanguíneo:</strong> Gracias a su efecto vasodilatador, mejora la circulación, permitiendo que tus músculos reciban más oxígeno y nutrientes durante el ejercicio.</li>
    <li><strong>Mayor energía y resistencia:</strong> Reduce la fatiga muscular, permitiéndote entrenar por más tiempo y con mayor intensidad.</li>
    <li><strong>Rendimiento explosivo:</strong> Mejora la fuerza y la potencia en ejercicios de alta intensidad, como levantamiento de pesas o sprints.</li>
    <li><strong>Apoyo en la recuperación:</strong> Facilita la eliminación de toxinas musculares, ayudando a una recuperación más rápida tras entrenamientos exigentes.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este suplemento disfrutarás de:</p>
  <ol>
    <li>Entrenamientos más largos e intensos, con menor sensación de agotamiento.</li>
    <li>Incremento de la vascularización, destacando la definición muscular.</li>
    <li>Mejoras significativas en fuerza y resistencia física.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Formato</th>
      <td>Polvo</td>
    </tr>
    <tr>
      <th>Contenido neto</th>
      <td>300 g / 60 cápsulas (según presentación)</td>
    </tr>
    <tr>
      <th>Uso recomendado</th>
      <td>1 dosis 30 minutos antes del entrenamiento</td>
    </tr>
    <tr>
      <th>Sabores disponibles</th>
      <td>Frutas cítricas, neutro</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Toma una dosis 30 minutos antes del entrenamiento para aprovechar al máximo sus beneficios. Combínalo con una dieta equilibrada y un programa de entrenamiento para mejores resultados.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Úsalo en días de entrenamiento de fuerza o alta intensidad para maximizar su impacto.</li>
    <li>Mantén una adecuada hidratación para optimizar los efectos del suplemento.</li>
    <li>Consérvalo en un lugar fresco y seco, lejos de la luz solar directa.</li>
  </ul>
        `,
    opcionesCompra: {
      sabores: [1, 2, 3, 4],
      tamanios: [3],
      colores: [],
      tallas: []
    }
  },
  {
    id: 19,
    title: "Estera de Yoga Antideslizante",
    idCategoria: 3,
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    imageUrl: ".././assets/imagenes/esterayoga.png",
    descripcion: `
            <p><strong>Comodidad, estabilidad y agarre en cada postura.</strong> Diseñada para ofrecer el mejor soporte durante tus prácticas de yoga, estiramientos o meditación. Su superficie antideslizante proporciona seguridad, mientras que su acolchado suave cuida de tus articulaciones. ¡Haz que cada sesión sea más cómoda y productiva!</p>
  <ul>
    <li><strong>Superficie antideslizante:</strong> Brinda un excelente agarre, incluso en las posturas más exigentes o cuando sudas.</li>
    <li><strong>Amortiguación óptima:</strong> Su acolchado de alta densidad protege tus rodillas, codos y espalda, reduciendo el impacto en las articulaciones.</li>
    <li><strong>Material duradero:</strong> Fabricada con materiales ecológicos y resistentes, asegura una larga vida útil, incluso con uso intensivo.</li>
    <li><strong>Ligera y portátil:</strong> Fácil de transportar gracias a su diseño liviano y correa de transporte incluida.</li>
    <li><strong>Versatilidad:</strong> Ideal para yoga, pilates, ejercicios de estiramiento o entrenamiento en casa.</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Al usar esta estera, disfrutarás de:</p>
  <ol>
    <li>Mayor estabilidad en cada postura, gracias a su diseño antideslizante.</li>
    <li>Protección adicional para tus articulaciones y comodidad prolongada.</li>
    <li>Un accesorio duradero y fácil de limpiar, ideal para rutinas diarias.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Material</th>
      <td>TPE ecológico / PVC premium</td>
    </tr>
    <tr>
      <th>Dimensiones</th>
      <td>183 cm x 61 cm x 6 mm (largo x ancho x grosor)</td>
    </tr>
    <tr>
      <th>Colores disponibles</th>
      <td>Morado, azul, verde, negro</td>
    </tr>
    <tr>
      <th>Accesorios</th>
      <td>Correa ajustable para transporte</td>
    </tr>
    <tr>
      <th>Características adicionales</th>
      <td>Resistente al agua y fácil de limpiar</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Limpia la estera después de cada uso con un paño húmedo o soluciones naturales de limpieza para mantenerla higiénica y en buen estado. Déjala secar al aire antes de enrollarla.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Úsala sobre una superficie plana para garantizar el máximo agarre.</li>
    <li>Practica sin zapatos para prolongar la vida útil del material.</li>
    <li>Complementa tu práctica con bloques de yoga o cojines de meditación.</li>
  </ul>
        `,
    opcionesCompra: {
      colores: [9, 4, 8, 1],
      sabores: [],
      tamanios: [],
      tallas: []
    }
  },
  {
    id: 20,
    title: "Reloj Deportivo con Monitoreo de Frecuencia Cardíaca",
    idCategoria: 3,
    price: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    imageUrl: ".././assets/imagenes/reloj.png",
    descripcion: `
             <p><strong>Tu compañero ideal para entrenamientos inteligentes y efectivos.</strong> Diseñado para ayudarte a llevar un control completo de tu rendimiento físico. Este reloj combina tecnología avanzada y comodidad, ofreciendo monitoreo en tiempo real de tu frecuencia cardíaca, calorías quemadas y actividades diarias.</p>
  <ul>
    <li><strong>Monitoreo de frecuencia cardíaca:</strong> Mantén un registro preciso de tu ritmo cardíaco durante tus entrenamientos y actividades diarias.</li>
    <li><strong>Contador de calorías:</strong> Calcula las calorías quemadas para que puedas ajustar tu dieta y rutina de ejercicios según tus objetivos.</li>
    <li><strong>Seguimiento de actividades:</strong> Registra pasos, distancia recorrida y tiempo activo para evaluar tu progreso.</li>
    <li><strong>Notificaciones inteligentes:</strong> Sincronízalo con tu smartphone para recibir alertas de llamadas, mensajes y recordatorios mientras te ejercitas.</li>
    <li><strong>Batería de larga duración:</strong> Disfruta de días de uso continuo con una sola carga.</li>
    <li><strong>Resistencia al agua:</strong> Ideal para actividades al aire libre y deportes acuáticos (resistente hasta 50 m).</li>
  </ul>
  <h3>Beneficios:</h3>
  <p>Con este reloj deportivo, podrás:</p>
  <ol>
    <li>Optimizar tus entrenamientos al controlar tus zonas de frecuencia cardíaca.</li>
    <li>Monitorear tu actividad diaria para mantenerte motivado y alcanzar tus metas.</li>
    <li>Recibir datos precisos para mejorar tu rendimiento físico.</li>
  </ol>
  <h3>Especificaciones:</h3>
  <table>
    <tr>
      <th>Pantalla</th>
      <td>OLED táctil a color</td>
    </tr>
    <tr>
      <th>Conectividad</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>Compatibilidad</th>
      <td>iOS y Android</td>
    </tr>
    <tr>
      <th>Duración de la batería</th>
      <td>Hasta 7 días</td>
    </tr>
    <tr>
      <th>Resistencia al agua</th>
      <td>5 ATM (hasta 50 metros)</td>
    </tr>
    <tr>
      <th>Colores disponibles</th>
      <td>Negro, gris, azul, rosa</td>
    </tr>
  </table>
  <h3>Recomendaciones de uso:</h3>
  <p>
    Ajusta la correa del reloj cómodamente para asegurar lecturas precisas de tu frecuencia cardíaca. Descarga la app compatible para sincronizar tus datos y llevar un registro más detallado de tu progreso.
  </p>
  <h3>Consejos adicionales:</h3>
  <ul>
    <li>Cárgalo completamente antes de usarlo por primera vez.</li>
    <li>Evita usarlo en saunas o agua caliente para prolongar su vida útil.</li>
    <li>Úsalo como guía para optimizar tus rutinas, pero escucha siempre a tu cuerpo.</li>
  </ul>
        `,
    opcionesCompra: {
      colores: [1, 3, 4, 10],
      sabores: [],
      tamanios: [],
      tallas: []
    }
  }
]
