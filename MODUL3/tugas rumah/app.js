Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { judul: '', pengarang: '', jenis: '', deskripsi: '', jumlah: ''}
        }
    },
    methods: {
        simpan: function(){
            this.$emit('send-data', this.data);
            this.data.judul = "";
            this.data.pengarang = "";
            this.data.jenis = "";
            this.data.deskripsi = "";
            this.data.jumlah = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        buku: {}
    },
    methods: {
        getData: function (value) {
            this.buku = {
                judul : value.judul,
                pengarang : value.pengarang,
                jenis : value.jenis,
                deskripsi : value.deskripsi,
                jumlah : value.jumlah
            }
        }
    }
})