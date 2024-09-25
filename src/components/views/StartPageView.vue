<script>
export default {
  name: 'StartPageView'
}
</script>

<template>
  <div class="start-page">
    <section class="section-one">
      <h1>Finance Guard</h1>
      <h2>¿Quines somos?</h2>
      <p style="text-align: start;"><br>
        TechTitans presenta FinanceGuard, una innovadora plataforma diseñada para gestionar tanto las finanzas personales como empresariales. Con el objetivo principal de simplificar la administración del dinero y mejorar la organización financiera de sus usuarios, FinanceGuard ofrece una experiencia intuitiva y eficiente.<br><br>
        La plataforma permite a los usuarios crear grupos para gestionar y compartir gastos de manera colaborativa. Dentro de estos grupos, se pueden registrar gastos, especificar quién pagó y cuánto, así como distribuir los costos entre los participantes. Además, FinanceGuard calcula automáticamente las deudas y saldos, proporcionando una visión clara de quién debe a quién, lo que resulta especialmente útil para compañeros de cuarto, parejas, amigos o familiares que comparten gastos en actividades como viajes, cenas, alquileres, facturas de servicios y compras conjuntas.<br><br>
        Más allá de las finanzas personales, FinanceGuard ofrece herramientas avanzadas para la gestión financiera empresarial. Entre estas, se incluyen la conciliación de cuentas y la generación de reportes contables detallados, facilitando el seguimiento y optimización de los recursos económicos de las empresas.<br><br>
        FinanceGuard empodera a sus usuarios, tanto individuales como corporativos, a tomar el control de su bienestar financiero, brindándoles las herramientas necesarias para seguir sus gastos, establecer metas financieras y ajustar sus presupuestos en función de sus objetivos económicos. Esta solución integral no solo mejora la transparencia financiera, sino que también promueve una mayor estabilidad económica, ayudando a los usuarios a alcanzar sus metas con confianza.<br><br>
        Misión: En FinanceGuard, nuestra misión es capacitar a individuos y empresas para que tomen las riendas de su bienestar financiero mediante una administración precisa, accesible y fácil de usar. Nos comprometemos a ofrecer soluciones innovadoras que simplifiquen el monitoreo, la planificación y la optimización de los recursos financieros, con el propósito de fomentar una mayor seguridad económica y ayudar a nuestros usuarios a cumplir sus objetivos financieros con certeza.<br><br>
        Visión: Aspiramos a convertirnos en la plataforma de referencia en la gestión financiera personal y empresarial, reconocida por nuestra capacidad de revolucionar la manera en que las personas y organizaciones administran sus finanzas. Nuestro objetivo es construir un futuro donde la claridad financiera y la educación económica estén al alcance de todos, contribuyendo al desarrollo económico y al bienestar integral de nuestros usuarios.
      </p>
    </section>
    
    <section class="section-two">
      <h2>Ventajas</h2>
      <ul>
        <li>Ventaja 1</li>
        <li>Ventaja 2</li>
        <li>Ventaja 3</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.start-page {
  text-align: center;
  padding: 20px;
}

.section-one, .section-two {
  margin-bottom: 40px;
}

.section-one img, .section-two img {
  max-width: 100%;
  height: auto;
}

.section-two ul {
  list-style-type: none;
  padding: 0;
}

.section-two li {
  margin: 10px 0;
}
</style>