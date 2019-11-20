<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card text-white"
          style="background: radial-gradient(circle, #43a047 0%, #dce775 100%)"
        >
        <q-card-section>
          <div class="text-h4">VAGAS</div>
        </q-card-section>
        </q-card>
      </div>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">Times</th>
              <th class="text-center">Disponibilidade</th>
              <th class="text-center">Preenchidas</th>
              <th class="text-center">Total de Vagas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">América</td>
              <td class="text-center">1</td>
              <td class="text-center">12</td>
              <td class="text-center">13</td>
            </tr>
            <tr>
              <td class="text-left">Central</td>
              <td class="text-center">4</td>
              <td class="text-center">9</td>
              <td class="text-center">13</td>
            </tr>
            <tr>
              <td class="text-left">Salgueiro</td>
              <td class="text-center">3</td>
              <td class="text-center">10</td>
              <td class="text-center">13</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
    </div>
    <div class="q-pa-md q-gutter-sm" align="center">
    <q-btn label="Como posso me inscrever?" text-color="black" color="lime-12" @click="fixed = true" />
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6" align="center">Termos de Condições</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>
          Para participar de um momento de lazer em que muitos apenas desfrutam de tal ocasião aos Domingos. Foram sugeridas algumas condições para que o funciona-
          namento da Copa seja condizente com as expectativas dos criadores da mesma. São elas:
          </p>
          <p>1. Ter sido indicado por algúem;</p>
          <p>2. Comprometer-se com o regulamento da Copa Luiza Braga;</p>
          <p>3. Ter princípios e condutas esportivas;</p>
          <p> Entrando em acordo com os itens acima citados, entre em contato com algum dos diretores de uma das equipes.</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Ok, Entendi" color="green" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      basic: false,
      fixed: false
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  text-align: center
</style>
