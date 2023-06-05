const { createApp } = Vue;

const Header = {
    props: {
        pagetitle: String
    },
    template: `
    <h1 class="titulo d-flex justify-content-center mb-4 py-4">{{ pagetitle }}</h1>
    `
}

const Table = {
    props: {
        headers: Array,
        medidas: Array,
        titulotabla: String,
        color: String
    },
    template: `
    <div :class="titulotabla">
    {{titulotabla}}
    </div>
<table class="table table-striped table-hover border text-center mb-5">
    <thead>
        <tr>
            <th v-for="(header, indexH) of headers" :key="indexH">
                {{header}}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(medida, indexM) of medidas" :key="indexM" :class="color">
        <td class="fw-semibold">{{medida.medida}}</td>
        <td>{{medida.XS}}</td>
        <td>{{medida.S}}</td>
        <td>{{medida.M}}</td>
        <td>{{medida.L}}</td>
        <td>{{medida.XL}}</td>
        <td>{{medida.XXL}}</td>
    </tr>
</tbody>
</table>
  `
}

createApp({
    components: {
        'header-component': Header,
        'table-component': Table,
    },
    data() {
        return {
            pagetitle: "Tabla de talles",
            tituloTablaHombre: 'Hombre',
            tituloTablaMujer: 'Mujer',
            tituloTablaNiño: 'Niño',
            claseFilaHombre: 'table-danger',
            claseFilaMujer: 'table-success',
            claseFilaNiño: 'table-warning',
            headers: ['Talle', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
            medidasHombre: [
                {
                    medida: 'Cintura',
                    XS: '76',
                    S: '80',
                    M: '84',
                    L: '88',
                    XL: '92',
                    XXL: '96'
                },
                {
                    medida: 'Tiro',
                    XS: '28',
                    S: '29',
                    M: '29',
                    L: '30',
                    XL: '31',
                    XXL: '32'
                },
                {
                    medida: 'Largo',
                    XS: '106',
                    S: '106',
                    M: '109',
                    L: '109',
                    XL: '109',
                    XXL: '110'
                },
            ],
            medidasMujer: [
                {
                    medida: 'Cintura',
                    XS: '68',
                    S: '72',
                    M: '76',
                    L: '80',
                    XL: '84',
                    XXL: '88'
                },
                {
                    medida: 'Tiro',
                    XS: '25',
                    S: '26',
                    M: '26',
                    L: '27',
                    XL: '27',
                    XXL: '28'
                },
                {
                    medida: 'Largo',
                    XS: '102',
                    S: '102',
                    M: '102',
                    L: '102',
                    XL: '103',
                    XXL: '104'
                },
            ],
            medidasNiño: [
                {
                    medida: 'Cintura',
                    XS: '52',
                    S: '54',
                    M: '56',
                    L: '58',
                    XL: '62',
                    XXL: '64'
                },
                {
                    medida: 'Tiro',
                    XS: '21',
                    S: '21',
                    M: '22',
                    L: '23',
                    XL: '23',
                    XXL: '23'
                },
                {
                    medida: 'Largo',
                    XS: '38',
                    S: '42',
                    M: '48',
                    L: '57',
                    XL: '65',
                    XXL: '71'
                },
            ]
        }
    }
}).mount("#app")