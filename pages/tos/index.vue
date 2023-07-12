<template>
  <div class="home-page-title-wrap">
    <h1 class="home-page-title">Terms of Service</h1>
  </div>

  <div class="tos-content-wrap">
    <div class="tos-content">
      <div class="tos-content-foreword">
        <h2>Foreword</h2>

        <h4>Skin Archive is a community project.</h4>
        <h4>It's made from fans to fans!</h4>
        <br />
        <h4>
          We are not profit focused. <br />All money generated through ads will
          be invested in server costs and improving the service.
        </h4>
        <br />
        <h4>
          Skin Archive is an open source code project. <br />
          The whole source code of the project is published on Github.
        </h4>

        <h2>Personal Data</h2>

        <h4>
          We dont offer user accounts at the moment, so we dont collect personal
          information about you.
        </h4>
        <br />
        <h4>
          Even we don't want information about you, you leave information like
          your ip, location or software specs after visiting a site. We analyze
          those data, to improve our service and to guarantee that our site
          cannot be attacked for example by DDoS.
        </h4>
        <br />
        <h4>
          That's why it's necessary to collect these data temporarily. We don't
          sell data to anybody and a simple Email to us is enough to get all
          your data permanently deleted.
        </h4>
        <br />
        <h4>
          Our server are located in the EU, so we adhere to the Europe Union
          GDPR. We use third party services like Cloudflare to provide our
          service worldwide. For that your datastream may be redirected to the
          US. These services may collect and process your data. To get more
          information about third party usage and third party data processing,
          visit our
          <NuxtLink class="tos-link" to="/privacy">privacy page</NuxtLink>.
        </h4>

        <h2>Advertisment</h2>

        <h4>
          To provide you our service completely free, we need to use ads.<br />All
          money generated through ads will be reinvested in our service and
          hosting costs.<br />
          We only use Google Ads for monetizing our service. <br />More
          information about Google Ads can be found on our
          <NuxtLink class="tos-link" to="/privacy">privacy page</NuxtLink>.
        </h4>

        <h2>Copyright</h2>
        <h4>We have asked and gained approval for all game screenshots.</h4>
        <h4>
          Do not share images from our site without asking. It's for your own
          security, we do not have the full copyrights on all our images, we're
          just allowed to use the content sometimes.
        </h4>

        <h2>Imprint</h2>
        <h4>Skin Archive</h4>
        <br />
        <h4>c/o Block Services</h4>
        <h4>Stuttgarter Str. 106</h4>
        <h4>70736 Fellbach</h4>
        <h4>Germany</h4>
        <h4>Email: trolllife01@gmail.com</h4>
        <br />
        <h4>
          The European Commission provides a platform for online dispute
          resolution (OS):
        </h4>
        <br />
        <h4>https://ec.europa.eu/consumers/odr</h4>
        <br />
        <h4>
          We are not willing or obliged to participate in dispute settlement
          procedures before a consumer arbitration board.
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "plain",
});
</script>

<style scoped lang="scss">
.tos-content-wrap {
  background-color: black;
  border-radius: 20px;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  width: 40%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 5px 20px 5px rgb(12, 12, 12);
}

.tos-link {
  font-size: clamp(0.4rem, 0.4vw + 0.4rem, 0.8rem);
  line-height: 1vw;
  color: #da9c2d;
  text-decoration: none;
}

.tos-content {
  margin: auto;
  overflow-y: auto;
  width: 95%;
  height: 95%;

  h2 {
    padding-top: 1.5rem;
    font-size: clamp(1.4rem, 1.4vw + 1.4rem, 1.8rem);
    padding-bottom: 1.5rem;
  }

  h4 {
    font-size: clamp(0.4rem, 0.4vw + 0.4rem, 0.8rem);
    line-height: 1vw;
  }
}
.home-page-title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
  position: relative;
  top: 5%;
}
.home-page-title {
  color: white;
  text-align: center;
}
</style>
