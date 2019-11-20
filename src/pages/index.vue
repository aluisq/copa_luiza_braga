<template>
<q-page>
    <div id="q-app">
  <div class="q-pa-md row items-start q-gutter-md" style="margin-right: -16px margin: 0 auto" >
      <q-card class="my-card">
        <q-img src="../statics/America_FC_(PE).svg.jpg"></q-img>
        <q-card>
          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn class="full-width q-mt-md" color="green-10" label="América" @click="$router.push('/home/america')"/>
            </div>
          </q-card-section>
        </q-card>
      </q-card>
      <q-card class="my-card">
        <q-img
          src="../statics/central.jpg"
          basic
        >
        </q-img>
        <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn class="full-width q-mt-md" color="black" label="Central" @click="$router.push('/home/central')"/>
            </div>
          </q-card-section>
        </q-card>
      <q-card class="my-card">
        <q-img
          src="../statics/salgueiro.png"
          basic
        >
        </q-img>
        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-btn class="full-width q-mt-md" color="red-14" label="Salgueiro" @click="$router.push('/home/salgueiro')" />
          </div>
        </q-card-section>
      </q-card>
    </div>
</div>
  </q-page>
</template>

<script>
</script>

<style lang="sass" scoped>
.my-card
  text-align: center
  margin: 0 auto
  margin-top: 32px
  width: 100%
  max-height: 800px
  max-width: 370px
.full-width q-mt-md
  display: block
</style>
