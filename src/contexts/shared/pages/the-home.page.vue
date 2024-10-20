<script>
export default {
  name: 'StartPageView'
}
</script>

<template>
  <div class="start-page">
    <h1>Finance Guard</h1>
    <img src="../../../assets/FinanceGuardLogo.png" alt="Finance Guard Logo">
    <section class="section-one">
      <h2 class="start-subtitle">{{ $t('homePage.startTitle') }}</h2>
      <p class="section-one-text"><br>{{ $t('homePage.sectionOne.paragraph1') }}<br><br>
        {{ $t('homePage.sectionOne.paragraph2') }}<br><br>
        {{ $t('homePage.sectionOne.paragraph3') }}<br><br>
        {{ $t('homePage.sectionOne.paragraph4') }}<br><br>
        {{ $t('homePage.sectionOne.paragraph5') }}<br><br>
        {{ $t('homePage.sectionOne.paragraph6') }}
      </p>
    </section>
    
    <section class="section-two">
      <h2 class="start-subtitle">{{ $t('homePage.sectionTwo.startSubtitle') }}</h2>
      <ul class="suscription-list">
        <li class="suscription-item">{{ $t('homePage.sectionTwo.subscriptionList.item1') }}<br><br><span>S/ 9,90</span></li>
        <li class="suscription-item">{{ $t('homePage.sectionTwo.subscriptionList.item2') }}<br><br><span>S/ 29,90</span></li>
        <li class="suscription-item">{{ $t('homePage.sectionTwo.subscriptionList.item3') }}<br><br><span>S/ 169,90</span></li>
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