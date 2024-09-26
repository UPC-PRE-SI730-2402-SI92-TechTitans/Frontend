<script>
export default {
  name: 'StartPageView'
}
</script>

<template>
  <div class="start-page">
    <h1>Finance Guard</h1>
    <img src="@/assets/FinanceGuardLogo.png" alt="Finance Guard Logo" />
    <section class="section-one">
      <h2 class="start-subtitle">¿Quines somos?</h2>
      <p class="section-one-text">
        <br />
        TechTitans presenta FinanceGuard, una innovadora plataforma diseñada para gestionar tanto
        las finanzas personales como empresariales. Con el objetivo principal de simplificar la
        administración del dinero y mejorar la organización financiera de sus usuarios, FinanceGuard
        ofrece una experiencia intuitiva y eficiente.<br /><br />
        La plataforma permite a los usuarios crear grupos para gestionar y compartir gastos de
        manera colaborativa. Dentro de estos grupos, se pueden registrar gastos, especificar quién
        pagó y cuánto, así como distribuir los costos entre los participantes. Además, FinanceGuard
        calcula automáticamente las deudas y saldos, proporcionando una visión clara de quién debe a
        quién, lo que resulta especialmente útil para compañeros de cuarto, parejas, amigos o
        familiares que comparten gastos en actividades como viajes, cenas, alquileres, facturas de
        servicios y compras conjuntas.<br /><br />
        Más allá de las finanzas personales, FinanceGuard ofrece herramientas avanzadas para la
        gestión financiera empresarial. Entre estas, se incluyen la conciliación de cuentas y la
        generación de reportes contables detallados, facilitando el seguimiento y optimización de
        los recursos económicos de las empresas.<br /><br />
        FinanceGuard empodera a sus usuarios, tanto individuales como corporativos, a tomar el
        control de su bienestar financiero, brindándoles las herramientas necesarias para seguir sus
        gastos, establecer metas financieras y ajustar sus presupuestos en función de sus objetivos
        económicos. Esta solución integral no solo mejora la transparencia financiera, sino que
        también promueve una mayor estabilidad económica, ayudando a los usuarios a alcanzar sus
        metas con confianza.<br /><br />
        Misión: En FinanceGuard, nuestra misión es capacitar a individuos y empresas para que tomen
        las riendas de su bienestar financiero mediante una administración precisa, accesible y
        fácil de usar. Nos comprometemos a ofrecer soluciones innovadoras que simplifiquen el
        monitoreo, la planificación y la optimización de los recursos financieros, con el propósito
        de fomentar una mayor seguridad económica y ayudar a nuestros usuarios a cumplir sus
        objetivos financieros con certeza.<br /><br />
        Visión: Aspiramos a convertirnos en la plataforma de referencia en la gestión financiera
        personal y empresarial, reconocida por nuestra capacidad de revolucionar la manera en que
        las personas y organizaciones administran sus finanzas. Nuestro objetivo es construir un
        futuro donde la claridad financiera y la educación económica estén al alcance de todos,
        contribuyendo al desarrollo económico y al bienestar integral de nuestros usuarios.
      </p>
    </section>

    <section class="section-two">
      <h2 class="start-subtitle">Ventajas</h2>
      <ul class="suscription-list">
        <li class="suscription-item">Suscripción por un mes<br /><br /><span>S/ 9,90</span></li>
        <li class="suscription-item">Suscripción por un año<br /><br /><span>S/ 29,90</span></li>
        <li class="suscription-item">Suscripción empresarial<br /><br /><span>S/ 169,90</span></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 2.5em;
  margin: 20px;
}
.section-one {
  width: clamp(100px, 90%, 1000px);
}
.section-one img {
  max-width: 100%;
  height: auto;
}
.start-subtitle {
  color: #c55;
  font-size: 1.5em;
  margin: 60px 0 20px 0;
}
.section-one-text {
  font-size: 1.15em;
  text-align: left;
  margin: 20px;
  text-wrap: pretty;
}
.start-page {
  text-align: center;
  padding: 20px;
}

.suscription-list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.suscription-item {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  width: 10rem;
  letter-spacing: 0.4px;
  text-align: center;
}
.suscription-item span {
  font-size: 1.5em;
  color: #c55;
}
</style>
