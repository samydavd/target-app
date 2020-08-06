<template>
    <div class="input-group" id="dra">
        <datepicker format="dd MMM yyyy" :language="es_ES" :value="getFrom" v-model="from" input-class="form-control text-center input-1"
        v-on:input="valiDate" placeholder="Desde"></datepicker>
        <span class="input-group-addon">a</span>
        <datepicker format="dd MMM yyyy" :language="es_ES" :value="getTo" v-model="to" input-class="form-control text-center input-2"
        v-on:input="valiDate" placeholder="Hasta"></datepicker>
    </div>
</template>

<style lang="scss">
    #dra .input-group-addon {
        padding: 5px 15px;
        border: 1px solid #CED4DA;
        background-color: #E9ECF0;
    }
    #dra .vdp-datepicker {
        width: calc(50% - 21px);
    }
    #dra .input-1 {
        background-color: #FFF !important;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0;
        border-color: #CED4DA;
    }
    #dra .input-2 {
        background-color: #FFF !important;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0;
        border-color: #CED4DA;
    }
</style>

<script>
    import moment from 'moment-timezone'
    Vue.use(require('vue-moment'), {
        moment,
    });
    import DatePicker from "vuejs-datepicker";
    import {en, es} from 'vuejs-datepicker/dist/locale';

    export default {
        name: 'DateRangePicker',
        components: {
            datepicker: DatePicker,
        },
        props: [
            'init'
        ],
        data: function() {
            return {
                from: '',
                to: '',
                es_ES: es,
            }
        },
        computed: {
            getFrom() {
                if (!this.from && this.init) {
                    let tmp = this.init.split(' a ');
                    if (moment(tmp[0]).isValid()) {
                        var split = tmp[0].split('-');
                        this.from = new Date(split[0], parseInt(split[1]) - 1, split[2]);
                    }
                }
                return this.from;
            },
            getTo() {
                if (!this.to && this.init) {
                    let tmp = this.init.split(' a ');
                    if (moment(tmp[1]).isValid()) {
                        var split = tmp[1].split('-');
                        this.to = new Date(split[0], parseInt(split[1]) - 1, split[2]);
                    }
                }
                return this.to;
            },
        },
        methods: {
            valiDate: function(e) {
                if (moment(this.from).isValid() && !moment(this.to).isValid()) {
                    this.to = this.from;
                }
                else if (!moment(this.from).isValid() && moment(this.to).isValid()) {
                    this.from = this.to;
                }
                else if (moment(this.from).isValid() && moment(this.to).isValid()
                    && moment(this.from).isAfter(moment(this.to))
                ) {
                    var tmp = this.from;
                    this.from = this.to;
                    this.to = tmp;
                }

                this.$emit('input', moment(this.from).format('YYYY-MM-DD')+' a '+moment(this.to).format('YYYY-MM-DD'));
            },
            limpiar: function () {
                this.from = null;
                this.to = null;
            }
        },
    }
</script>