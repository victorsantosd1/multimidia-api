export default {
    props: ['time'],
    template: `
    <ul class="row">
      <li class="col-l">{{ times.nomeTime}}</li>
      <li class="col-l">{{ times.posicao}}</li>
      <li class="col-l">{{ times.pontos}}</li>
      <li class="col-l">{{ times.gols}}</li>
      <li class="col-l">{{ times.campeonato}}</li>
      <li class="col-l">{{ times.vitorias}}</li>
      <li class="col-l">{{ times.derrotas}}</li>
    </ul>
    `  
}