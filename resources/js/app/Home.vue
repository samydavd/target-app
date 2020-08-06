<template>
	<div></div>
</template>

<script>
	export default {
		data() {
			return {
				error: [],
				success: [],
				url: {
	                current: this.$root.base_url + '/sistema/secciones/' + this.$route.params.idSeccion + '/menus/'+ this.$route.params.idMenu + '/acciones',
	                permisos: {},
	            },
				data: {
					nombre: null,
					accion: null,
					orden: null,
					descripcion: null,
				},
				menu: {
					nombre: null
				}
			}
		},
		mounted() {
        	this.iniciar();
        },
        methods: {
			limpiarMensajes() {
				this.success = [];
				this.error = [];
			},
			iniciar() {
				this.limpiarMensajes();
				let load = loading(this);
				let menu_id = this.$route.params.idMenu;

				axios.post(this.url.current + '/crear', {menu_id: menu_id})
				.then(response => {
					this.menu = response.data.menu;
				})
				.catch(error => {
					this.error = this.$root.arrayResponse(error);
				})
				.finally(() => {
					 load.hide();
				})
			},
		}
	}
</script>