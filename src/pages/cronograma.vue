<template>
  <q-page>
    <div id="q-app">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="my-card text-white"
          style="background: radial-gradient(circle, #43a047 0%, #dce775 100%)"
        >
        <q-card-section>
          <div class="text-h4">CRONOGRAMA</div>
        </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-md">
    <q-card class="my-card">
        <q-card-section>
          <div class="text-h6 text-left">Próxima Rodada</div>
        </q-card-section>
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-center">Jogos</th>
              <th class="text-center">Data</th>
              <th class="text-center">Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">América x Salgueiro</td>
              <td class="text-center">29/09/19</td>
              <td class="text-center">7:00 AM</td>
            </tr>
            <tr>
              <td class="text-center">Central x America</td>
              <td class="text-center">29/09/19</td>
              <td class="text-center">7:30 AM</td>
            </tr>
            <tr>
              <td class="text-center">Salgueiro x Central</td>
              <td class="text-center">29/09/19</td>
              <td class="text-center">8:00 AM</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
      </div>
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 text-left">Última Rodada</div>
          </q-card-section>
          <q-markup-table>
            <thead>
              <tr>
                <th class="text-center">Jogos</th>
                <th class="text-center">Data</th>
                <th class="text-center">Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">América x Central</td>
                <td class="text-center">22/09/19</td>
                <td class="text-center">7:00 AM</td>
              </tr>
              <tr>
                <td class="text-center">Central</td>
                <td class="text-center">22/09/19</td>
                <td class="text-center">7:30 AM</td>
              </tr>
              <tr>
                <td class="text-center">Salgueiro</td>
                <td class="text-center">22/09/19</td>
                <td class="text-center">8:00 AM</td>
              </tr>
            </tbody>
          </q-markup-table>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  text-align: center;
</style>
