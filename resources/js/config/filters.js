import moment from 'moment-timezone'

Vue.use(require('vue-moment'), {
    moment,
});

Vue.filter('dateTime', function (fecha) {
    if (moment(fecha).isValid()) {
      return moment(fecha).tz('America/Santiago').format('DD-MM-YYYY h:mm A');
    }

    return fecha;
})
Vue.filter('dateTimeTwoLines', function (fecha) {
    if (moment(fecha).isValid()) {
        return (
            moment(fecha).tz('America/Santiago').format('DD-MM-YYYY') +
            "<br />" +
            moment(fecha).tz('America/Santiago').format('hh:mm A')
        );
    }

    return fecha;
})
Vue.filter('date', function (fecha) {
    if (moment(fecha).isValid()) {
      return moment(fecha).tz('America/Santiago').format('DD-MM-YYYY');
    }

    return fecha;
})
Vue.filter('year', function (fecha) {
    if (moment(fecha).isValid()) {
      return moment(fecha).tz('America/Santiago').format('YYYY');
    }

    return fecha;
})
Vue.filter('month', function (fecha) {
    if (moment(fecha).isValid()) {
      return moment(fecha).tz('America/Santiago').format('MM');
    }

    return fecha;
})
Vue.filter('time', function (fecha) {
    if (moment(fecha).isValid()) {
      return moment(fecha).tz('America/Santiago').format('h:mm A');
    }

    return fecha;
})
Vue.filter('number', function (number) {
    if (number) {
        if (window.hasOwnProperty('Intl')){
            return new Intl.NumberFormat("de-DE").format(number);
        }
        else {
            try {
                var numero = parseInt(number);
            }
            catch (error) {
                var numero = number;
            }

            if (isNaN(numero)) {
                return numero;
            }

            return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }

    return number;
})
Vue.filter('ucwords', function (value) {
    if (!value) return ''
    return value.toString().toLowerCase().toLocaleUpperCase();
})
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
})
Vue.filter('nl2br', function(str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    if (str) {
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }
    return '';
})
Vue.filter('rut', function(value) {
    if(!value) return '';
    let actual = value.replace(/^0+/, "");
    let rutPuntos = "";
    if (actual != '' && actual.length > 1) {
        let sinPuntos = actual.replace(/\./g, "");
        let actualLimpio = sinPuntos.replace(/-/g, "");
        let inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        let j = 1;
        for (let i = inicio.length - 1; i >= 0; i--) {
            let letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
        let dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }
    return rutPuntos;
})
Vue.filter('currency', function(value, fixed=2) {
    let val = (value/1).toFixed(fixed).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})